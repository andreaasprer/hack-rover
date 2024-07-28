import { useState } from "react";

const ClawSlider = () => {
  const [sliderValue, setSliderValue] = useState(50)

  const handleSlideChange = (event) => {
    setSliderValue(parseInt(event.target.value, 10))
  }
  
  console.log(sliderValue);
  return (
    <div>
      <div className="card">
        <div className="slider-container">
          <label>Select a Value :</label>
          <input
            type="range"
            id='clawSlider'
            min='0'
            max='100'
            step='1'
            value={sliderValue}
            onChange={handleSlideChange}
          />
        </div>
      </div>
    </div>
  )
}

export default ClawSlider