import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card" style={{ width: "50rem" }}>
          <div className="card-body">
            <WeatherSearch defaultCity="Seattle" />
          </div>
        </div>
        <span className="source-code">
          <a href="https://github.com/kaylashovlowsky/react-weather-app">
            Open-source code{" "}
          </a>
          by Kayla Shovlowsky
        </span>
      </div>
    </div>
  );
}
