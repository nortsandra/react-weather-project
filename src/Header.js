import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="header">
      <form className="search-form bottom-line">
        <div className="row padding-bottom-line">
          <div className="col-8 searchbar-city">
            <input
              onfocus="value=''"
              type="text"
              id="city-input"
              placeholder="Enter a city..."
              className="form-control shadow-sm"
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
    </div>
  );
}
