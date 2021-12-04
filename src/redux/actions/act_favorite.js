import * as actionType from "../actions"; // Get all actions as actionType

// Adding City information into Favorite array
export const addFavorite = (data, city) => {
  return (dispatch) => {
    dispatch({
      type: actionType.ADD_FAVORITE_CITYS,
      payload: { data, city },
    });
  };
};

// Remove city from array
export const removeFavorite = (cityName, arr) => {
  return async (dispatch) => {
    try {
      arr.forEach((arrData) => {
        let indexNumber = arr.findIndex((data) => data.city === cityName);
        let index = arrData.city.indexOf(cityName);
        if (index > -1) {
          arr.splice(indexNumber, 1); // Delete City from array by index
        }
      });
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: actionType.REMOVE_FAVORITE_CITY,
    });
  };
};
