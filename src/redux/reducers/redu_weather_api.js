import * as actionType from "../actions";

const initialState = {
  items: [],
  isLoading: false,
};

// Reducer for Autocompletion + Forecast + Currentcondition endpoint
const weather_api = (state = initialState, action) => {
  switch (action.type) {
    // Get city info + forecast
    case actionType.WEATHER_API:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };

    // Set loading to TRUE
    case actionType.ISLOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default weather_api;
