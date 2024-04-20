import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "445od433c4e95b2d074a20e8fb1cta30";
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">{props.data.icon}</div>
          <div className="WeatherForecast-wind-speed">
            {Math.round(props.data.wind)}
          </div>
        </div>
      </div>
    </div>
  );
}
