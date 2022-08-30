import React from "react";

// Libraries
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

// Includes
import "../assets/css/header.css";

function Header() {
  return (
    <div>
      <Navbar bg="light" variant="light" className="border-bottom border-dark">
        <div className="navLogo">
          <NavLink to="/">
            <i className="fas fa-cloud-moon"></i>
            Weather
            <span className="logoSpan">forecast</span>
          </NavLink>
        </div>

        <Nav className="nav-bar-items ms-auto me-5">
          <NavLink to="/">Home</NavLink>
          <span></span>
          <NavLink to="/favorite" className="nav-link-favorite">
            Favorite
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
