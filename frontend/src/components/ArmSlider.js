import { useState } from "react";

const ArmSlider = () => {
  const [armSliderValue, setArmSliderValue] = useState(50)

  const handleSlideChange = (event) => {
    setArmSliderValue(parseInt(event.target.value, 10))
  }
  
  console.log(armSliderValue);
  return (
    <div>
      <div className="card">
        <div className="slider-container">
          <label>Select a Value :</label>
          <input
            type="range"
            id='rangeInput'
            min='0'
            max='100'
            step='1'
            value={armSliderValue}
            onChange={handleSlideChange}
          />
        </div>
      </div>
    </div>
  )
}

export default ArmSlider