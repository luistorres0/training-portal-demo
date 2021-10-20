import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/menu">
        <img src={logo} alt="logo" />
      </Link>
    </nav>
  );
}

export default NavBar;
