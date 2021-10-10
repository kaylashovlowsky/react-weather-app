import React, { useState } from "react";
import "./TempConversion.css";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <span className="temp-conversion">
        <span className="temp-display">{Math.round(props.fahrenheit)}</span>
        <span className="fahrenheit">
          {" "}
          °F |
          <a href="/" onClick={convertCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="temp-conversion">
        <span className="temp-display">{Math.round(celsius())}</span>
        <span className="fahrenheit">
          {" "}
          <a href="/" onClick={convertFahrenheit}>
            °F{" "}
          </a>
          | °C
        </span>
      </span>
    );
  }
}
