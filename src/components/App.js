import React from "react";
import './../styles/App.css';


class App  extends React.Component {
    state = {
    weather: {
      temperature: 25,
      conditions: "Sunny",
    }
  };
  threshold = 20;

  render() {
    const { weather } = this.state;
    const temperatureColor = weather.temperature > this.threshold ? "red" : "blue";

    return (
      <div>
        <h1>Weather App</h1>
        <p>Temperature: <span style={{ color: temperatureColor }}>{weather.temperature}</span></p>
        <p>Conditions: {weather.conditions}</p>
      </div>
    );
  }
}


export default App
