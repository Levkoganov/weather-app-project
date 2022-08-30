import React from "react";

// Includes
import Form from "./form";
import Forecast from "./forecast";
import { useSelector } from "react-redux";

function Weather() {
  // Redux
  const { cityName, error } = useSelector((state) => state.weatherApi.items);

  return (
    <div>
      <Form />
      {cityName ? <Forecast /> : error ? error : "Please Enter a city..."}
    </div>
  );
}

export default Weather;
