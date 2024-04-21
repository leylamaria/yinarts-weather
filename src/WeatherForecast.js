import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import { Hearts } from "react-loader-spinner";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.city]);

  function handleForecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "445od433c4e95b2d074a20e8fb1cta30";
    let city = props.data.city;
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleForecastResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        {forecast.map(function (day, index) {
          if (index > 0 && index < 6) {
            return (
              <div className="col g-3" key={index}>
                <WeatherForecastDay data={day} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();
    return (
      <Hearts
        height="80"
        width="80"
        color="rgba(237, 77, 119)"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }
}
