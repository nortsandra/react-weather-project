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
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
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
    const apiKey = "0efb4fc16a9ed98dc0b3aafd8491d6ad";
    const units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="header">
        <form onSubmit={handleSubmit} className="search-form bottom-line">
          <div className="row padding-bottom-line">
            <div className="col-8 searchbar-city">
              <input
                onFocus={(event) => (event.target.value = "")}
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
