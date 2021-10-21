import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Common/NavBar";
import customerService from "../images/customer-service.png";
import repairs from "../images/repairs.png";
import "./MainMenuView.css";

function MainMenuView() {
  const linkStyle = {
    textDecoration: "none",
    color: "#555",
    boxShadow: "3px 3px 5px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    margin: "0 30px"
  }

  return (
    <div className="main-menu-view">
      <NavBar />
      <h1>Main Menu</h1>
      <main>
        <Link style={linkStyle} to="/customer-service">
          <figure>
            <img src={customerService} alt="customer service" />
            <figcaption>Customer Service</figcaption>
          </figure>
        </Link>
        <Link style={linkStyle} to="/repairs">
          <figure>
            <img src={repairs} alt="repairs" />
            <figcaption>Repairs</figcaption>
          </figure>
        </Link>
      </main>
    </div>
  );
}

export default MainMenuView;
