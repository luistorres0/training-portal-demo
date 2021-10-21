import React, { useState } from "react";
import { useHistory } from "react-router";
import "./LoginForm.css";

function LoginForm({ setIsLoggedIn }) {
  const initialFormData = {
    username: "",
    password: "",
  };

  const history = useHistory();
  const [formData, setFormData] = useState({ ...initialFormData });

  const handleInputChange = (e) => {
    setFormData((currentData) => {
      return {
        ...currentData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users/login/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      const data = await response.json();

      if (data.message === "authenticated") {
        setIsLoggedIn(true);
        history.push("/menu");
      }

      // TODO: When creating a new user, use the code below.
      // await fetch("http://localhost:5000/users/", {
      //   method: "post",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ data: formData }),
      // });
    } catch (error) {
      console.log(error);
    }
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
            type="password"
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
