import React from "react";

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
            <i
              className="fa-solid fa-location-crosshairs location"
              type="submit"
              id="get-current-city"></i>
          </div>
        </div>
      </form>
    </div>
  );
}
