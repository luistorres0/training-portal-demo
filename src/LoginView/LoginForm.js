import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const initialFormData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleInputChange = (e) => {
    setFormData((currentData) => {
      return {
        ...currentData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({ ...initialFormData });
  };

  return (
    <div className="login-form-container">
      <h3 className="login-form-heading">Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleInputChange}
            value={formData.username}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={handleInputChange}
            value={formData.password}
          />
        </div>
        <button className="login-submit-button" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
