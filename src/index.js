// Default
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// Redux
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// Import 'redux' reducers
import reducerWeatherApi from "./redux/reducers/redu_weather_api";
import reducerFavoriteCity from "./redux/reducers/redu_favorite";
import reducerCheckCity from "./redux/reducers/redu_check_city";

// ReducerCombiner
const rootReducer = combineReducers({
  weatherApi: reducerWeatherApi,
  favoriteCity: reducerFavoriteCity,
  saveCity: reducerCheckCity,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
    // **** REQUIRE CHROME EXTANTION (Redux DevTools) **** //
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
