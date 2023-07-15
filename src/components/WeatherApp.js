import React from "react";
import './../styles/App.css';

const WeatherApp = ({ weather }) => {
  const threshold = 20;

  const temperatureColor = weather.temperature > threshold ? "red" : "blue";

  return (
    <div id="main">
      <span id="temperature" style={{ color: temperatureColor }}>
        Temperature: {weather.temperature}
      </span>
      <span id="conditions">Weather Conditions: {weather.conditions}</span>
    </div>
  );
};

export default WeatherApp;
