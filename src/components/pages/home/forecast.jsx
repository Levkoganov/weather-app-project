import React from "react";
import swal from "sweetalert"; // Alert Library

// Redux Includes
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../../../redux/actions/act_favorite";
import { checkCity, removeCity } from "../../../redux/actions/act_check_city";

// Assets js functions
import iconSrc from "../../assets/js/iconSrc";
import dateBuilder from "../../assets/js/dateBuilder";
import imgSrc from "../../assets/js/imgSrc";
import { saveMsg, errorMsg } from "../../assets/js/alertMsg";
import "../../assets/css/forecast.css";

function Forecast() {
  // Redux
  const dispatch = useDispatch();
  const { cityName, data, foreCast } = useSelector(
    (state) => state.weatherApi.items
  );
  const { favorite } = useSelector((state) => state.favoriteCity);
  const { citys } = useSelector((state) => state.saveCity);

  // handle for save btn
  const handleAddFavorite = (city) => {
    // If Favorite array is empty
    if (favorite.length !== 0) {
      // If city already saved
      if (citys.includes(city)) {
        errorMsg();
      } else {
        dispatch(checkCity(city));
        saveMsg();
        return dispatch(addFavorite(data, city));
      }
    } else {
      // Save If array is empty
      dispatch(checkCity(city));
      saveMsg();
      return dispatch(addFavorite(data, city));
    }
  };

  // Handle for delete btn
  const handleDeleteFavorite = (cityName) => {
    swal({
      title: "Are you sure?",
      text: 'Click "Delete" to delete the item',
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(removeCity(cityName, citys)); // Remove city from check array
        dispatch(removeFavorite(cityName, favorite)); // Remove city from favorite
        swal("City has been deleted!", {
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="mt-4">
      {/* First Row */}
      <div className="row">
        <div className="col-3">
          {/* Card */}
          <div className="card big-card" style={{ width: "17rem" }}>
            <img className="time" src={imgSrc(data.IsDayTime)} alt="img..." />
            <div className="icon mx-auto">
              <img src={iconSrc(data.WeatherIcon)} alt="alt" />
            </div>

            {/* Card body */}
            <div className="card-body text-center">
              <p>{cityName}</p>
              <p>{data.WeatherText}</p>
              <h4>
                <hr />
                <span>TEMP </span>
                <span className="temp-value">
                  {data.Temperature.Metric.Value}
                </span>
                <span>&deg;</span>
                <span>{data.Temperature.Metric.Unit}</span>
              </h4>
            </div>
          </div>
        </div>

        {/* Add favorite btn */}
        <div className="col-lg ms-auto text-end">
          {/* Delete btn */}
          {citys.includes(cityName) && (
            <button
              className="btn-card-delete"
              onClick={() => handleDeleteFavorite(cityName)}
            >
              Delete
            </button>
          )}
          {/* Save btn */}
          <button
            className="btn-card-save"
            onClick={() => handleAddFavorite(cityName)}
          >
            Save
          </button>
        </div>
      </div>

      {/* Second Row */}
      <div className="row">
        <div className="col-4 mx-auto text-center">
          <h4>
            <span className="weather-icon">
              <i className="fas fa-cloud-sun"></i>
            </span>
            {data.WeatherText}
          </h4>
        </div>
      </div>

      {/* Third Row */}
      <div className="row mt-4">
        {/* Loop foreCast */}
        {foreCast.DailyForecasts.map((data) => (
          <div className="col text-center" key={data.EpochDate}>
            {/* Card */}
            <div className="card small-card mb-4">
              <div className="card-header">
                <span>
                  <img
                    className="buttom-icon-card"
                    src={iconSrc(data.Day.Icon)}
                    alt="alt"
                  />
                </span>
                {/* Format Date into Days */}
                <h5>{dateBuilder(new Date(data.Date))}</h5>
              </div>
              {/* Card body */}
              <div className="card-body forecast">
                <h6>
                  <span>TEMP </span>
                  <span>{data.Temperature.Maximum.Value}</span>
                  <span>&deg;</span>
                  <span>{data.Temperature.Maximum.Unit}</span>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
