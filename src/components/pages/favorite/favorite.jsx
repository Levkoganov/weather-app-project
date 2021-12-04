import React from "react";
import { useSelector } from "react-redux";

// Includes
import FavoriteGrid from "./favorite-grid";

function MainFavorite() {
  const { favorite } = useSelector((state) => state.favoriteCity);

  return (
    <div className="text-center mt-5">
      {favorite.length !== 0 ? (
        <FavoriteGrid />
      ) : (
        "Please add a city to view this content..."
      )}
    </div>
  );
}

export default MainFavorite;
