import React from "react";
import './../styles/App.css';

const WeatherApp = ({ weather }) => {
  const threshold = 20;

  const temperatureColor = weather.temperature > threshold ? "red" : "blue";

  return (
    <div id="main">
      <p id="temperature" style={{ color: temperatureColor }}>
        Temperature: {weather.temperature}°C
      </p>
      <p id="conditions">Weather Conditions: {weather.conditions}</p>
    </div>
  );
};

export default WeatherApp;
