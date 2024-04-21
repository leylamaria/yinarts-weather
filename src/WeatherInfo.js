import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WindDirection from "./WindDirection";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-center">{props.data.city}</h1>
      <h2 className="text-center">{props.data.country}</h2>
      <div className="text-center">
        <FormattedDate date={props.data.date} />
      </div>

      <div className="row mt-3 g-0">
        <div className="col-6 ">
          <ul>
            <li>
              Wind:<strong> {props.data.wind} km/h</strong>
            </li>
            <li>
              <WindDirection direction={props.data.direction} />{" "}
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-lg-6">
          <div className="temperature-container d-flex justify-content-end">
            <div className="icon"> {props.data.icon} </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
