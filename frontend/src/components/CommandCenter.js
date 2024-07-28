import { useEffect, useState, useRef } from 'react'

// components
import DataTable from './DataTable'
import Key from './Key'
import ArmSlider from './ArmSlider'
import ClawSlider from './ClawSlider'




// for connections to pico
import io from 'socket.io-client'

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

    // function to send direction from front end to backend
    const sendDirection = (direction) => {
      socket.emit('send-direction', direction)
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
            sendDirection("forward")
            newKeyStates.w = true;
            console.log('up') 
        } else if (event.key === 'a') {
            // TODO: SEND TO MQTT TO MOVE COUNTER-CLOCKWISE
            sendDirection("left")
            newKeyStates.a = true
            console.log('left')
        } else if (event.key === 's') {
            // TODO: SEND TO MQTT TO MOVE DOWN
            sendDirection("back")
            newKeyStates.s = true
            console.log('down')
        } else if (event.key === 'd') {
            // TODO: SENT TO MQTT TO MOVE CLOCKWISE
            sendDirection("right")
            newKeyStates.d = true
            console.log('right')
        } else if (event.key === 'x') {
            // TODO: SEND TO MQTT TO STOP
            sendDirection("stop")
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
            <ArmSlider />
            <ClawSlider />

          </div>
        </div>

        <div className='right'>
          {/* placeholder for camera display */}
          <img src='black-box.jpg' width='60%'></img>
          <DataTable temp={temp} hmd={humidity} dis={ultrasonic}/>
        </div>
      </div>
    )
}

export default CommandCenter