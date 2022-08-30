import * as actionType from "../actions";

const initialState = {
  citys: [],
};

//This Reducer is checking for existing citys
const checkCityReducer = (state = initialState, action) => {
  switch (action.type) {
    // Adding city
    case actionType.CHECK_CITY:
      return {
        ...state,
        citys: [...state.citys, action.payload],
      };
    case actionType.REMOVE_CITY:
      // Delete city
      return {
        ...state,
        citys: [...state.citys],
      };
    default:
      return state;
  }
};

export default checkCityReducer;
