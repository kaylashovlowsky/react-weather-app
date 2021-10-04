import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay.js";
import axios from "axios";
import "./App.css";

export default function WeatherSearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `632a5d0f15a7053d4f021e44e4d50ed0`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="form-app">
        <form className="location-input">
          <div className="row">
            <div className="col-9">
              <div className="mb-3">
                <input
                  type="text"
                  id="city-input"
                  className="form-control"
                  placeholder="Enter city or zipcode"
                  onChange={handleCityChange}
                />
              </div>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Get forecast"
                className="btn btn-primary mb-5"
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </form>
        <WeatherDisplay data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
