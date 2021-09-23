import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    date: "Today",
    description: "Clear skys",
    humidity: 0,
    wind: 2,
  };

  return (
    <div className="weather">
      <p className="date-display">{weatherData.date}</p>
      <p className="weather-description">{weatherData.description}</p>
      <br />

      <div className="humidity">
        humidity: <span id="humidity">{weatherData.humidity}</span>
      </div>
      <div className="wind">
        wind speed: <span id="wind-speed">{weatherData.wind}</span>
      </div>
    </div>
  );
}
