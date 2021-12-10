// libraries
import React from "react";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";

// Includes
import { removeCity } from "../../../redux/actions/act_check_city"; // Favorite cityNames array
import { removeFavorite } from "../../../redux/actions/act_favorite"; // Favorite city info
import imgSrc from "../../assets/js/imgSrc";
import iconSrc from "../../assets/js/iconSrc";
import "../../assets/css/favorite-gird.css";

function FavoriteGrid() {
  // Redux
  const dispatch = useDispatch();
  const { citys } = useSelector((state) => state.saveCity);
  const { favorite } = useSelector((state) => state.favoriteCity);

  // Delete favorite city
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
    <div className="row">
      <h1 className="mb-5 favorite-header ">Favorite List</h1>
      {/* Display all favorite citys */}
      {favorite.map((res) => (
        <div
          className="col-lg-3 d-flex justify-content-evenly mb-5 test"
          key={res.city}
        >
          {/* Card wrapper */}
          <div className="card big-card " style={{ width: "17rem" }}>
            <img
              className="time"
              src={imgSrc(res.data.IsDayTime)}
              alt="img..."
            />
            <div className="icon mx-auto">
              <img src={iconSrc(res.data.WeatherIcon)} alt="alt" />
            </div>
            <div className="card-body text-center">
              <p>{res.city}</p>
              <p>{res.data.WeatherText}</p>
              <h4>
                <hr />
                <span>TEMP </span>
                <span className="temp-value">
                  {res.data.Temperature.Metric.Value}
                </span>
                <span>&deg;</span>
                <span>{res.data.Temperature.Metric.Unit}</span>
              </h4>
              {/* Delete btn */}
              <button
                className="btn-card-delete-favorite"
                onClick={() => {
                  handleDeleteFavorite(res.city);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavoriteGrid;
