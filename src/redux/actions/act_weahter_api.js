import axios from "axios"; // Import axios
import * as actionType from "../actions"; // Get all actions as actionType
import {
  keyQuery,
  autoCompleteUrl,
  currentConditionsUrl,
  foreCastUrl,
} from "../../config/base-url"; // Endpoint URL

// Getting weather information of the city
export const weatherApi = (location) => {
  return async (dispatch) => {
    try {
      const city = await axios.get(autoCompleteUrl + location); //City information
      const { Key } = city.data[0]; // Get city key
      const { LocalizedName } = city.data[0]; // Get city name

      const cityCon = await axios.get(currentConditionsUrl + Key + keyQuery); // City current condition
      const foreCastCity = await axios.get(foreCastUrl + Key + keyQuery); // Forecast weather condition
      // Dispatch action into a reducer
      dispatch({
        type: actionType.WEATHER_API,
        payload: {
          cityName: LocalizedName,
          foreCast: foreCastCity.data,
          data: cityCon.data[0],
        },
      });

      // ERROR handler
    } catch (err) {
      let errorMsg = "";
      if (`${err}` === "Error: Network Error") {
        errorMsg = `${err}.`;
      } else if (!location) {
        errorMsg = "Please enter a location.";
      } else if (location) {
        errorMsg = "City was not found.";
      } else {
        errorMsg = "Something went wrong...";
      }

      // Dispatch ERRORs
      dispatch({
        type: actionType.WEATHER_API,
        payload: {
          error: errorMsg,
        },
      });
    }
  };
};

// Set loading animation for searchbar
export const setLoading = () => {
  return (dispatch) => {
    dispatch({
      type: actionType.ISLOADING,
    });
  };
};
