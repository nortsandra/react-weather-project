import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import Forecast from "./Forecast";
import ForecastDays from "./ForecastDays";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container-weather-app">
      <Header />
      <div className="container container-weatherinfo">
        <Forecast />
        <ForecastDays />
      </div>
      <Footer />
    </div>
  );
}
