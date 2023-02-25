import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  console.log({ props });
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);

    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);

    return `${temperature}°`;
  }

  return (
    <div className="forecastPreview">
      <div className="weather-forecast-date weather-details">{day()}</div>
      {props.data.weather && (
        <WeatherIcon code={props.data.weather[0].icon} size={38} />
      )}
      <div className="weather-forecast-temperature">
        <span className="temp-max">{maxTemperature()}</span>
        <span className="temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
