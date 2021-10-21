import React from "react";
import "./LoginView.css";
import logo from "../images/logo.png";
import LoginForm from "./LoginForm";

function LoginView({ setIsLoggedIn }) {
  return (
    <div className="login-view-container">
      <img className="login-logo" src={logo} alt="logo" />
      <h1>Training Portal</h1>
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default LoginView;
