import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  return (
    <div className="row forecast-days">
      <div className="col-7 d-flex">
        <div>
          <i className="fas fa-map-marker-alt icon-location" type="button"></i>
        </div>
        <div>
          <div>
            <p className="m-0" id="selected-city">
              {props.data.city}
              <span id="country-code"></span>
            </p>
          </div>
          <div className="weather-details">
            <span className="m-0" id="date"></span>
            <span className="m-0" id="time"></span>
            <div id="last-updated">
              Last updated:
              <br />
              <span id="current-day" className="current-day">
                <FormattedDate date={props.data.date} />
              </span>
              <br />
            </div>
            <br />
            <div>
              Windspeed: <strong>{props.data.wind}km/h</strong>{" "}
              <span id="windspeed"></span>
            </div>
            <div>
              Humidity: <strong>{props.data.humidity}%</strong>
              <span id="humidity"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-5 d-flex inner-weather-details">
        <div className="center-icon">
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
        <div className="inner-temperature">
          <div className="temperature">
            <span className="temperature-number">
              {Math.round(props.data.temperature)}
            </span>
            <span className="temperature-units">
              <p id="celsius-link">°C</p>
            </span>
          </div>
          <div id="description" className="weather-details">
            {props.data.description}
          </div>
        </div>
      </div>
    </div>
  );
}
