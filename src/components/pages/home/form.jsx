import React, { useState } from "react";

// Includes
import { useDispatch, useSelector } from "react-redux";
import { weatherApi, setLoading } from "../../../redux/actions/act_weahter_api";
import "../../assets/css/searchbar.css"; // Get Weather of a city

function Form() {
  // Redux
  const dispatch = useDispatch();
  const [city, setCity] = useState({ name: "" }); // State for the City
  const { isLoading } = useSelector((state) => state.weatherApi);

  // Get the value input
  const handleChange = (e) => {
    const { value, name } = e.target;
    const newCity = { ...city, [name]: value };
    setCity(newCity);
  };

  // Submite the cityName
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { name } = city;
    dispatch(weatherApi(name)); // Api call
    dispatch(setLoading()); // Loading animation
  };
  return (
    <div className="form-section mt-4">
      <form onSubmit={handleOnSubmit}>
        <label>
          <h5>Enter a location for weather information</h5>
        </label>
        <br />
        <input
          type="text"
          name="name"
          value={city.name}
          onChange={handleChange}
        />
        <button>
          {isLoading ? (
            <i className="fas fa-circle-notch fa-spin"></i>
          ) : (
            "Search"
          )}
        </button>
      </form>
    </div>
  );
}

export default Form;
