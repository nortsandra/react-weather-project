import React, { useState, useEffect } from "react";
import ForecastPreview from "./ForecastPreview";
import axios from "axios";

export default function ForecastDays(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
    const apiKey = "0efb4fc16a9ed98dc0b3aafd8491d6ad";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude=hourly,current,minutely,alerts&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleForecastResponse);
  }, [props.coordinates]);

  function handleForecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weather-forecast">
        {forecast.map(function (day, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <ForecastPreview data={day} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
