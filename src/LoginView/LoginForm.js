import React, { useState } from "react";
import { useHistory } from "react-router";
import "./LoginForm.css";

function LoginForm({ setIsLoggedIn }) {
  const initialFormData = {
    email: "",
    password: "",
  };

  const history = useHistory();
  const [formData, setFormData] = useState({ ...initialFormData });
  const [emailError, setEmailError] = useState("none");
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
    const { email, password } = formData;
    setEmailError("none");
    setPasswordError("none");

    let isValid = true;
    if (email.length === 0) {
      setEmailError("Email cannot be empty");
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
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("not valid");
    }
  };

  return (
    <div className="login-form-container">
      <h3 className="login-form-heading">Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
          />
          <small className={emailError !== "none" ? "show" : ""}>{emailError}</small>
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
