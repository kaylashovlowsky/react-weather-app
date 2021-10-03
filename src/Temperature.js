import React, { useState } from "react";
import "./Temperature.css";
import axios from "axios";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,

      description: response.data.weather[0].description,
      icon: "http://openweathermap.org/img/wn/10d@2x.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="temperature">
        <h2>
          <div>
            <span id="temperature-display">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="fahrenheit">°F</span>
          </div>
        </h2>
        <h3>
          <img src={weatherData.icon} id="icon" alt={weatherData.description} />
        </h3>

        <p className="weather-description text-capitalize">
          {weatherData.description}
        </p>
        <br />

        <div className="humidity">
          humidity: <span id="humidity">{weatherData.humidity}</span>
        </div>
        <div className="wind">
          wind speed: <span id="wind-speed">{weatherData.wind}</span>
        </div>
      </div>
    );
  } else {
    const apiKey = `632a5d0f15a7053d4f021e44e4d50ed0`;
    let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading...";
  }
}
