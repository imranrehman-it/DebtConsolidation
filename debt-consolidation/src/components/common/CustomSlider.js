import React, { useState } from "react";
import "./CustomSlider.css";


export const CustomSlider = ({ min, max, value, unit, startValue, set }) => {
  const [sliderValue, setSliderValue] = useState(startValue);

  const handleChange = (e) => {
    setSliderValue(e.target.value);
    set(e.target.value);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        value={sliderValue}
        onChange={handleChange}
        className="slider"
      />
      <div
        className="overlay-bar"
        style={{ width: `${((value - min) / (max - min)) * 100}%` }}
      ></div>
      <div className="slider-labels flex justify-between">
        <span className="text-xs">
          {min}
          {unit}
        </span>
        <span className="text-xs">
          {max}
          {unit}
        </span>
      </div>
    </div>
  );
};
