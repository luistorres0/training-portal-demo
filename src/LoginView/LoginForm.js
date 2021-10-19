import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="login-form-container">
      <h3 className="login-form-heading">Login</h3>
      <form>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </div>
        <button className="login-submit-button" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
