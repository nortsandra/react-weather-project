import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);

    return `${temperature}°`;
  }

  return (
    <div className="ForecastPreview">
      <div className="weather-forecast-date weather-details">{day()}</div>
      {props.data.condition && (
        <WeatherIcon code={props.data.condition.icon} size={38} />
      )}
      <div className="weather-forecast-temperature">
        <span className="temp-max">{maxTemperature()}</span>
        <span className="temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
