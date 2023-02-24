import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container-weather-app">
      <Header />
      <Footer />
    </div>
  );
}
