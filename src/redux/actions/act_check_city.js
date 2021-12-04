import * as actionType from "../actions"; // Get all actions as actionType

// Adding city into array
export const checkCity = (city) => {
  return (dispatch) => {
    dispatch({
      type: actionType.CHECK_CITY,
      payload: city,
    });
  };
};

// Remove city from array
export const removeCity = (cityName, arr) => {
  return async (dispatch) => {
    try {
      // Find city index in array
      const checkCityName = arr.indexOf(cityName);
      if (checkCityName > -1) {
        arr.splice(checkCityName, 1); // Remove city from array by index
      }
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: actionType.REMOVE_CITY,
    });
  };
};
