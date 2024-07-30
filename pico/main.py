from connections import connect_mqtt, connect_internet
from constants import ssid, mqtt_server, mqtt_user, mqtt_pass
from time import sleep
from machine import Pin, PWM
from utime import sleep, sleep_us
from hcsr04 import HCSR04
from dht import DHT11
import network

# Ultrasonic sensor setup
ultrasonic_sensor = HCSR04(trigger_pin=16, echo_pin=17, echo_timeout_us=10000)
led = Pin('LED', Pin.OUT)  # Initialize the LED pin

# Temperature and Humidity sensor setup
temp_humidity_sensor = DHT11(Pin(15, Pin.IN, Pin.PULL_UP))

# Motor control setup
Mot_A_Forward = Pin(18, Pin.OUT)  # Front-left wheel
Mot_A_Back = Pin(19, Pin.OUT)
Mot_B_Forward = Pin(20, Pin.OUT)  # Front-right wheel
Mot_B_Back = Pin(21, Pin.OUT)
Mot_C_Forward = Pin(0, Pin.OUT)  # Back-left wheel
Mot_C_Back = Pin(1, Pin.OUT)
Mot_D_Forward = Pin(2, Pin.OUT)  # Back-right wheel
Mot_D_Back = Pin(3, Pin.OUT)

# Motor control functions
def move_forward():
    Mot_A_Forward.value(1)
    Mot_B_Forward.value(1)
    Mot_C_Forward.value(1)
    Mot_D_Forward.value(1)
    Mot_A_Back.value(0)
    Mot_B_Back.value(0)
    Mot_C_Back.value(0)
    Mot_D_Back.value(0)

def move_backward():
    Mot_A_Forward.value(0)
    Mot_B_Forward.value(0)
    Mot_C_Forward.value(0)
    Mot_D_Forward.value(0)
    Mot_A_Back.value(1)
    Mot_B_Back.value(1)
    Mot_C_Back.value(1)
    Mot_D_Back.value(1)

def move_stop():
    Mot_A_Forward.value(0)
    Mot_B_Forward.value(0)
    Mot_C_Forward.value(0)
    Mot_D_Forward.value(0)
    Mot_A_Back.value(0)
    Mot_B_Back.value(0)
    Mot_C_Back.value(0)
    Mot_D_Back.value(0)

def move_right():
    Mot_A_Forward.value(0)
    Mot_B_Forward.value(1)
    Mot_C_Forward.value(0)
    Mot_D_Forward.value(1)
    Mot_A_Back.value(1)
    Mot_B_Back.value(0)
    Mot_C_Back.value(1)
    Mot_D_Back.value(0)

def move_left():
    Mot_A_Forward.value(1)
    Mot_B_Forward.value(0)
    Mot_C_Forward.value(1)
    Mot_D_Forward.value(0)
    Mot_A_Back.value(0)
    Mot_B_Back.value(1)
    Mot_C_Back.value(0)
    Mot_D_Back.value(1)

# Servo class and initialization
class Servo:
    __servo_pwm_freq = 50
    __min_u16_duty = 600  # Offset for correction
    __max_u16_duty = 6000  # Offset for correction
    min_angle = 0
    max_angle = 180    
    current_angle = 0.001

    def __init__(self, pin):
        self.__initialise(pin)
        
    def update_settings(self, servo_pwm_freq, min_u16_duty, max_u16_duty, min_angle, max_angle, pin):
        self.__servo_pwm_freq = servo_pwm_freq
        self.__min_u16_duty = min_u16_duty
        self.__max_u16_duty = max_u16_duty
        self.min_angle = min_angle
        self.max_angle = max_angle
        self.__initialise(pin)
        
    def move(self, angle, speed=1.0):
        angle = round(angle, 2)
        if angle == self.current_angle:
            return
        self.current_angle = angle
        duty_u16 = self.__angle_to_u16_duty(angle)
        self.__motor.duty_u16(duty_u16)
        sleep(speed)  # Delay to control speed
        
    def __angle_to_u16_duty(self, angle):
        return int((angle - self.min_angle) * self.__angle_conversion_factor) + self.__min_u16_duty
    
    def __initialise(self, pin):
        self.current_angle = -0.001
        self.__angle_conversion_factor = (self.__max_u16_duty - self.__min_u16_duty) / (self.max_angle - self.min_angle)
        self.__motor = PWM(Pin(pin))
        self.__motor.freq(self.__servo_pwm_freq)

# Initialize the servo motor
pwmPin = 14  # Change this to the correct pin for your setup
servo_motor = Servo(pwmPin)

# Define speed (lower value = slower movement)
servo_speed = 0.25  # Adjust this value to change speed, e.g., 0.1 seconds delay per step

# MQTT message callback function
def cb(topic, msg):
    print(f"Topic: {topic}, Message: {msg}")
    if topic == b"direction":
        if msg == b"forward":
            move_forward()
        elif msg == b"backward":
            move_backward()
        elif msg == b"left":
            move_left()
        elif msg == b"right":
            move_right()
        elif msg == b"stop":
            move_stop()
    elif topic == b"pinch":
        print("inside pinch topic")
        servo_motor.move(int(msg), servo_speed)  # Adjust angle increment as needed
    elif topic == b"arm":
        print('inside arm')
        

def main():
    try:
        connect_internet("HAcK-Project-WiFi-2", password="UCLA.HAcK.2024.Summer")
        client = connect_mqtt("3cd09583504249a3af8fd67f29725ae1.s1.eu.hivemq.cloud", "picow", "Picopico1")

        client.set_callback(cb)
        client.subscribe("direction")
        client.subscribe("pinch")
        client.subscribe('arm')

        ultrasonic_cycles = 0
        temp_humidity_cycles = 0
        
        distance = None  # Initialize the distance variable
        
        while True:
            # Check for new messages
            client.check_msg()

            # Ultrasonic sensor logic
            if ultrasonic_cycles >= 20:
                distance = ultrasonic_sensor.distance_cm()
                print('Distance:', distance, 'cm')
                client.publish("ultrasonic", str(distance))
                ultrasonic_cycles = 0

            if distance is not None and distance < 5:
                led.value(1)  # Turn on LED if too close
            else:
                led.value(0)  # Turn off LED otherwise
            
            ultrasonic_cycles += 1

            # Temperature and Humidity sensor logic
            if temp_humidity_cycles >= 100:
                temp_humidity_sensor.measure()
                temp = temp_humidity_sensor.temperature()
                humid = temp_humidity_sensor.humidity()
                
                print("Temperature in C:", temp)
                print("Humidity: ", humid)
                
                client.publish("temp", str(temp))
                client.publish("humidity", str(humid))
                temp_humidity_cycles = 0

            temp_humidity_cycles += 1

            sleep(0.1)  # Slight delay for stability

    except KeyboardInterrupt:
        print('Keyboard interrupt')

    finally:
        move_stop()  # Stop all motors
        if led:  # Ensure the LED is turned off
            led.value(0)
        servo_motor.move(90)  # Move servo to neutral position
        print("Servo stopped and set to neutral position.")

if __name__ == "__main__":
    main()