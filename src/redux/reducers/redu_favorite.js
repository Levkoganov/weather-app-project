import * as actionType from "../actions";

const initialState = {
  favorite: [],
};

// This reducer add city info into the state
const addFavoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add city info
    case actionType.ADD_FAVORITE_CITYS:
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    case actionType.REMOVE_FAVORITE_CITY:
      // Remove city info
      return {
        ...state,
        favorite: [...state.favorite],
      };
    default:
      return state;
  }
};

export default addFavoriteReducer;
