// Import pages
import Header from "./components/header/header";
import Favorite from "./components/pages/favorite/favorite";
import Home from "./components/pages/home/home";

// Includes
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { weatherApi } from "./redux/actions/act_weahter_api";

function App() {
  // Redux
  const dispatch = useDispatch();

  // Display "Tel Aviv" onloading
  useEffect(() => {
    dispatch(weatherApi("Tel Aviv")); // Api call
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
