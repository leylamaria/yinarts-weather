import React, { useState } from "react";
import axios from "axios";
import { Hearts } from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "Wednesday, 11:11",
      temperature: response.data.temperature.current,
      icon: (
        <img
          src={response.data.condition.icon_url}
          alt="{weatherData.description}"
        />
      ),
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      direction: response.data.wind.degree,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row g-2">
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-4 text-end">
          <div className="col-6">
            <span className="icon"> {weatherData.icon} </span>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6 ">
            <ul>
              <li>Wind : {weatherData.wind} km/h</li>
              <li>Wind direction : {weatherData.direction}° </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "445od433c4e95b2d074a20e8fb1cta30";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <Hearts
        height="140"
        width="140"
        color="rgba(237, 77, 119)"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }
}
