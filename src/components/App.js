import React from "react";
import WeatherApp from "./WeatherApp.js";
import './../styles/App.css';

const App = () => {
   const weatherData = { temperature: 25, conditions: "Sunny" };

  return (
    <div id="main">
      <WeatherApp weather={weatherData} />
    </div>
  )
   
}

export default App
