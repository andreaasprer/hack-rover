import { useEffect, useState } from 'react'


// for each individual key that sends control instructions
const Key = ({ text, condition }) => {
    return (
      <div className="Key" style={{ borderColor: condition ? "#e0243d" : "#847577"  }}>
        <p>{text}</p>
      </div>
    )
  }

const CommandCenter = () => {
    const [keyStates, setKeyStates] = useState({
      w: false,
      a: false,
      s: false,
      d: false,
      x: false
    })
  
    useEffect(() => {
      const handleKeyDown = (event) => {
        const newKeyStates = { ...keyStates }
  
        if (event.key === 'w') {
            // TODO: SEND TO MQTT TO TURN ON MOTORS FORWARD
            newKeyStates.w = true;
            console.log('up') 
        } else if (event.key === 'a') {
            // TODO: SEND TO MQTT TO MOVE COUNTER-CLOCKWISE
            newKeyStates.a = true
            console.log('left')
        } else if (event.key === 's') {
            // TODO: SEND TO MQTT TO MOVE DOWN
            newKeyStates.s = true
            console.log('down')
        } else if (event.key === 'd') {
            // TODO: SENT TO MQTT TO MOVE CLOCKWISE
            newKeyStates.d = true
            console.log('right')
        } else if (event.key === 'x') {
            // TODO: SEND TO MQTT TO STOP
            newKeyStates.x = true
            console.log('stop')
        }
  
        setKeyStates(newKeyStates)
      }
  
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
          <div className="top-keys">
            <Key text='UP' condition={keyStates.w}/>
          </div>
          <div className="bottom-keys">
            <Key text='LEFT' condition={keyStates.a}/>
            <Key text='STOP' condition={keyStates.x}/>
            <Key text='RIGHT' condition={keyStates.d} />
          </div>
            <Key text='DOWN' condition={keyStates.s}/> 
        </div>
        </div>
      </div>
    )
}

export default CommandCenter