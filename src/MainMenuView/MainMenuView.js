import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Common/NavBar";
import customerService from "../images/customer-service.png";
import repairs from "../images/repairs.png";
import "./MainMenuView.css";

function MainMenuView() {
  return (
    <div>
      <NavBar />
      <h1>Main Menu</h1>
      <main>
        <Link to="">
          <figure>
            <img src={customerService} alt="customer service" />
            <figcaption>Customer Service</figcaption>
          </figure>
        </Link>
        <Link to="">
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
