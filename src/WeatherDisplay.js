import React from "react";
import DisplayDate from "./DisplayDate";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";
import Forecast from "./Forecast";
import "./WeatherDisplay.css";

export default function WeatherDisplay(props) {
  return (
    <div className="weather-display">
      <h1>{props.data.city}</h1>
      <h2>
        <TempConversion fahrenheit={props.data.temperature} />
      </h2>
      <h3 className="float-left">
        <WeatherIcon code={props.data.icon} size={200} />
      </h3>
      <br />
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
      <hr className="line-display" />
      <Forecast />
      <hr className="line-display" />
    </div>
  );
}
