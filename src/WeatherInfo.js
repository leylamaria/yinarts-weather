import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-4 text-end">
        <div className="col-6">
          <span className="icon"> {props.data.icon} </span>
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6 ">
          <ul>
            <li>Wind : {props.data.wind} km/h</li>
            <li>Wind direction : {props.data.direction}° </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
