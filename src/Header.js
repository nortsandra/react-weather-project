import React, { useState } from "react";
import Forecast from "./Forecast";
import ForecastDays from "./ForecastDays";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humididty: response.data.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function search() {
    const apiKey = "0efb4fc16a9ed98dc0b3aafd8491d6ad";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="header">
        <form onSubmit={handleSubmit} className="search-form bottom-line">
          <div className="row padding-bottom-line">
            <div className="col-8 searchbar-city">
              <input
                onfocus="value=''"
                type="text"
                id="city-input"
                placeholder="Enter a city..."
                className="form-control shadow-sm"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control shadow-sm button-pink"
              />
            </div>
            <div className="col-1">
              <FontAwesomeIcon
                className="location"
                icon={faLocationCrosshairs}
                type="button"
              />
            </div>
          </div>
        </form>
        <Forecast data={weatherData} />
        <ForecastDays
          coordinates={weatherData.coordinates}
          city={weatherData.city}
        />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
