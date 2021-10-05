import React from "react";
import DisplayDate from "./DisplayDate";
import "./WeatherDisplay.css";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <h1>{props.data.city}</h1>
      <h2>
        <span>{Math.round(props.data.temperature)}</span>
        <span className="fahrenheit">°F</span>
      </h2>
      <h3>
        <img src={props.data.icon} alt={props.data.description} />
      </h3>
      <DisplayDate date={props.data.date} />
      <p className="weather-description text-capitalize">
        {props.data.description}
      </p>
      <br />
      <div className="humidity">
        Humidity: <span id="humidity">{props.data.humidity}%</span>
      </div>
      <div className="wind">
        Wind Speed: <span id="wind-speed">{props.data.wind} mph</span>
      </div>
    </div>
  );
}
