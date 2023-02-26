import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { ThreeDots } from "react-loader-spinner";

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) {
    return (
      <div className="loader-container">
        <ThreeDots type="ThreeDots" color="green" height={100} width={100} />
      </div>
    );
  }

  return (
    <div className="container-weather-app">
      <Header defaultCity="Kyiv" />
      <Footer />
    </div>
  );
}
