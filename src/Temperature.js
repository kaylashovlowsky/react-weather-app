import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="temperature">
      <h2>
        <div>
          <span id="temperature-display">80</span>
          <span className="fahrenheit">°F</span>
        </div>
      </h2>
      <h3>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" id="icon" />
      </h3>
    </div>
  );
}
