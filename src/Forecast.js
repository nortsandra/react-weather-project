import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function WeatherInfo() {
  return (
    <div class="row forecast-days">
      <div class="col-7 d-flex">
        <div>
          <FontAwesomeIcon className="icon-location" icon={faMapLocationDot} />
        </div>
        <div>
          <div>
            <p class="m-0" id="selected-city">
              Kyiv<span id="country-code"></span>
            </p>
          </div>
          <div class="weather-details">
            <span class="m-0" id="date"></span>
            <span class="m-0" id="time"></span>
            <div id="last-updated">
              Last updated:
              <br />
              <span id="current-day" class="current-day"></span>
              <br />
            </div>
            <br />
            <div>
              Windspeed: <span id="windspeed"></span>
            </div>
            <div>
              Humidity: <span id="humidity"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-5 d-flex inner-weather-details">
        <div class="center-icon">
          <img
            alt="alt"
            src="https://openweathermap.org/img/wn/11d@2x.png"
            id="main-icon"
          />
        </div>
        <div class="inner-temperature">
          <div class="temperature">
            <span class="temperature-number">4</span>
            <span class="temperature-units">
              <p id="celsius-link">°C</p>
            </span>
          </div>
          <div id="description" class="weather-details"></div>
        </div>
      </div>
    </div>
  );
}
