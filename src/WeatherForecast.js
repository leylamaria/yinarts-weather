import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">{props.data.icon}</div>
          <div className="WeatherForecast-wind">
            <span className="WeatherForecast-wind-speed">
              {Math.round(props.data.wind)}
            </span>{" "}
            <span>{props.data.direction}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
