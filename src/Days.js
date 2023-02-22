import React from "react";

export default function Days() {
  return (
    <div className="weather-forecast" id="weather-forecast">
      <div className="row bottom-line pb-2">
        <div className="col">
          <div className="weather-forecast-date weather-details">Mon</div>
          <img
            alt=""
            src="https://openweathermap.org/img/wn/01d@2x.png"
            width="52px"
          />
          <div className="weather-forecast-temperatures">
            <span className="temp-max">10°</span>
            <span className="temp-min">21°</span>
          </div>
        </div>

        <div className="col">
          <div className="weather-forecast-date weather-details">Tue</div>
          <img
            alt=""
            src="https://openweathermap.org/img/wn/02d@2x.png"
            width="52px"
          />
          <div className="weather-forecast-temperatures">
            <span className="temp-max">10°</span>
            <span className="temp-min">21°</span>
          </div>
        </div>

        <div className="col">
          <div className="weather-forecast-date weather-details">Wed</div>
          <img
            alt=""
            src="https://openweathermap.org/img/wn/03d@2x.png"
            width="52px"
          />
          <div className="weather-forecast-temperatures">
            <span className="temp-max">10°</span>
            <span className="temp-min">21°</span>
          </div>
        </div>

        <div className="col">
          <div className="weather-forecast-date weather-details">Thu</div>
          <img
            alt=""
            src="https://openweathermap.org/img/wn/04d@2x.png"
            width="52px"
          />
          <div className="weather-forecast-temperatures">
            <span className="temp-max">10°</span>
            <span className="temp-min">21°</span>
          </div>
        </div>

        <div className="col">
          <div className="weather-forecast-date weather-details">Fri</div>
          <img
            alt=""
            src="https://openweathermap.org/img/wn/11d@2x.png"
            width="52px"
          />
          <div className="weather-forecast-temperatures">
            <span className="temp-max">10°</span>
            <span className="temp-min">21°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
