import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Forecast(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "f8edd982a4a7077051d3a896edb21fe6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div class="row forecast-days">
      <div class="col-7 d-flex">
        <div>
          <FontAwesomeIcon className="icon-location" icon={faMapLocationDot} />
        </div>
        <div>
          <div>
            <p class="m-0" id="selected-city">
              {props.data.city}
              <span id="country-code"></span>
            </p>
          </div>
          <div class="weather-details">
            <span class="m-0" id="date"></span>
            <span class="m-0" id="time"></span>
            <div id="last-updated">
              <br />
              <span id="current-day" class="current-day">
                {" "}
                <FormattedDate date={props.data.date} />
              </span>
              <br />
            </div>
            <br />
            <div>
              Windspeed: <strong>{props.data.wind}km/h</strong>
              <span id="windspeed"></span>
            </div>
            <div>
              Humidity: <strong>{props.data.humidity}%</strong>
              <span id="humidity"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-5 d-flex inner-weather-details">
        <div class="center-icon">
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
        <div class="inner-temperature">
          <div class="temperature">
            <span class="temperature-number">
              {Math.round(props.data.temperature)}
            </span>
            <span class="temperature-units">
              <p id="celsius-link">°C</p>
            </span>
          </div>
          <div id="description" class="weather-details">
            <FormattedDate description={props.data.description} />
          </div>
        </div>
      </div>
    </div>
  );
}
