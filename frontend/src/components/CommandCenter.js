import { useEffect, useState, useRef } from 'react'

// components
import DataTable from './DataTable'
import Key from './Key'

// for connections to pico
import io from 'socket.io-client'

// link to camera stream
const cameraURL = 'http://192.168.50.135:81/stream'
const socket = io('http://localhost:8000');

const CommandCenter = () => {
    // object to keep track of key states
    const [keyStates, setKeyStates] = useState({
      w: false,
      a: false,
      s: false,
      d: false,
      x: false
    })

    // states holding sensor data
    const [temp, setTemp] = useState(null)
    const [ultrasonic, setUltrasonic] = useState(null)
    const [humidity, setHumidity] = useState(null)

    // states for arm's servos
    const [clawSliderValue, setClawSliderValue] = useState(50)
    const [armSliderValue, setArmSliderValue] = useState(50)

    // handler for claw and arm changes
    const handleClawSlideChange = (event) => { 
      setClawSliderValue(parseInt(event.target.value, 10)) 
      // send instructions to pico
      sendClawValue(clawSliderValue)
    }
    const handleArmSlideChange = (event) => { 
      setArmSliderValue(parseInt(event.target.value, 10))
      // send instructions to pico
      sendArmValue(armSliderValue)
    }

    // function to send direction from front end to backend
    const sendDirection = (direction) => {
      socket.emit('send-direction', direction)
    }

    const sendArmValue = (value) => {
      socket.emit('send-arm-value', value);
    }

    const sendClawValue = (value) => {
      socket.emit('send-pinch-value', value);
    };


  // function to move for a short duration
  const moveForDuration = (direction, duration = 250) => {
    sendDirection(direction)
    setTimeout(() => {
      sendDirection("stop")
    }, duration)
  }

    useEffect(() => {
      // Listen for temperature updates
      socket.on('temp', (data) => {
        setTemp(data);
      });
  
      // Listen for ultrasonic updates
      socket.on('ultrasonic', (data) => {
        setUltrasonic(data);
      });
  
      socket.on('humidity', (data) => {
        setHumidity(data);
      });
  
      return () => {
        socket.off('temp');
        socket.off('ultrasonic');
        socket.off('humidity')
      };
    }, []);
  
    useEffect(() => {
      // handler for key down events
      const handleKeyDown = (event) => {
        const newKeyStates = { ...keyStates }
  
        if (event.key === 'w') {
            // TODO: SEND TO MQTT TO TURN ON MOTORS FORWARD
            moveForDuration("forward")
            newKeyStates.w = true;
            console.log('up') 
        } else if (event.key === 'a') {
            // TODO: SEND TO MQTT TO MOVE COUNTER-CLOCKWISE
            moveForDuration("left")
            newKeyStates.a = true
            console.log('left')
        } else if (event.key === 's') {
            // TODO: SEND TO MQTT TO MOVE DOWN
            moveForDuration("backward")
            newKeyStates.s = true
            console.log('down')
        } else if (event.key === 'd') {
            // TODO: SENT TO MQTT TO MOVE CLOCKWISE
            moveForDuration("right")
            newKeyStates.d = true
            console.log('right')
        } else if (event.key === 'x') {
            // TODO: SEND TO MQTT TO STOP
            moveForDuration("stop")
            newKeyStates.x = true
            console.log('stop')
        }
  
        setKeyStates(newKeyStates) // update key state
      }
  
      // handler for key up events
      const handleKeyUp = () => {
        const newKeyStates = { ...keyStates }
        setKeyStates(newKeyStates)
      }
  
      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
      }
    }, [])
  
    return (
      <div className="container">
        <div className="left">
          <div className="KeyboardDisplay">
            <h3>Direction Controls</h3>
            <div className="top-keys">
              <Key text='UP' button="'W'" condition={keyStates.w}/>
            </div>
            <div className="bottom-keys">
              <Key text='LEFT' button="'A'" condition={keyStates.a}/>
              <Key text='STOP' button="'X'" condition={keyStates.x}/>
              <Key text='RIGHT' button="'D'" condition={keyStates.d} />
            </div>
            <Key text='DOWN' button="'S'" condition={keyStates.s}/> 
          </div>

          <div className='ArmDisplay'>
            <h3>Arm Controls</h3>
            
            <div className='armSlider'>
              <div className="card">
                <div className="slider-container">
                  <label>Set Arm Degree: </label>
                  <input
                    type="range"
                    id='armSlider'
                    min='0'
                    max='180'
                    step='1'
                    value={armSliderValue}
                    onChange={handleArmSlideChange}
                  />
                </div>
              </div>
            </div>

            <div className='clawSlider'>
              <div className="card">
                <div className="slider-container">
                  <label>Set Claw Degree: </label>
                  <input
                    type="range"
                    id='clawSlider'
                    min='0'
                    max='180'
                    step='1'
                    value={clawSliderValue}
                    onChange={handleClawSlideChange}
                  />
                </div>
              </div>
            </div>







          </div>
        </div>

        <div className='right'>
          <iframe src={cameraURL} width={405} height={300}></iframe>
          <DataTable temp={temp} hmd={humidity} dis={ultrasonic}/>
        </div>
      </div>
    )
}

export default CommandCenter