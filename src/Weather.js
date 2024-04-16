import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn w-100" />
          </div>
        </div>
      </form>
      <h1>Buen Hombre, DR</h1>
      <ul>
        <li>Tuesday, 10:07</li>
        <li>Clear Sky</li>
      </ul>
      <div className="row mt-4 text-end">
        <div className="col-6">
          <span className="icon">⛅️</span>
          <span className="temperature">13 </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6 ">
          <ul>
            <li>Wind: 11 km/h</li>
            <li>Wind direction: NW</li>
            <li>Humidity: 33%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
