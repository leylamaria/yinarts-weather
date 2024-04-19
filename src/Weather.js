import React, { useState } from "react";
import axios from "axios";
import { Hearts } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
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

  function search() {
    const apiKey = "445od433c4e95b2d074a20e8fb1cta30";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row g-2">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control search-input"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://yinarts.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Leyla Maria{" "}
            </a>
            is open-sourced on{" "}
            <a
              href="https://github.com/leylamaria/yinarts-weather"
              target="_blank"
              rel="noreferrer"
            >
              GitHub{" "}
            </a>
            and hosted on{" "}
            <a
              href="https://yinarts-weather.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </p>
        </footer>
      </div>
    );
  } else {
    search();
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
