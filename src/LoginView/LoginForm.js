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
  const [usernameError, setUsernameError] = useState("none");
  const [passwordError, setPasswordError] = useState("none");

  const handleInputChange = (e) => {
    setFormData((currentData) => {
      return {
        ...currentData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const validateFormData = () => {
    const { username, password } = formData;
    setUsernameError("none");
    setPasswordError("none");

    let isValid = true;
    if (username.length === 0) {
      setUsernameError("Username cannot be empty");
      isValid = false;
    }
    
    if (password.length === 0) {
      setPasswordError("Password cannot be empty");
      isValid = false;
    } else if (password.length < 7) {
      setPasswordError("Password must have at least 7 characters");
      isValid = false;
    } else if (!password.includes("#")) {
      setPasswordError("Password must contain a '#' symbol");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateFormData()) {
      console.log("valid");
    } else {
      console.log("not valid");
    }

    // try {
    //   const response = await fetch("http://localhost:5000/users/login/", {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ data: formData }),
    //   });

    //   const data = await response.json();

    //   if (data.message === "authenticated") {
    //     setIsLoggedIn(true);
    //     history.push("/menu");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
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
          <small className={usernameError !== "none" ? "show" : ""}>{usernameError}</small>
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
          <small className={passwordError !== "none" ? "show" : ""}>{passwordError}</small>
        </div>
        <button className="login-submit-button" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
