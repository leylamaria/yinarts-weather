import React from "react";

export default function WindDirection(props) {
  const getCardinalDirection = (degree) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(degree / 45) % 8;
    return directions[index];
  };

  const windDirectionInDegrees = props.direction;
  const windDirectionInCardinal = getCardinalDirection(windDirectionInDegrees);

  return (
    <div className="WindDirection">
      Wind direction:<strong> {windDirectionInCardinal}</strong>
    </div>
  );
}
