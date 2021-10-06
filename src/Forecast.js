import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Sunday</div>
          <WeatherIcon code="01d" size={70} />
          <div className="forecast-temp">
            <span className="forecast-temp-max">19°</span>
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
