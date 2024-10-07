import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./Config/config";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Login = () => {
  const navigate = useNavigate();
  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      userName: userNameRef.current.value,
      password: passwordRef.current.value,
    };

    axios
      .post(`${API.apiUrl}/login`, payload)
      .then((res) => {
        console.log(res);
        NotificationManager.success("login successful!");
        navigate("/home");
      })
      .catch((e) => {
        console.log(e);
        NotificationManager.error("Something went wrong!")
      });
  };

  return (
    <div className="login-container">
      <NotificationContainer/>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" ref={userNameRef} required />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <div style={{ textAlign: "center" }}>
          {" "}
          {/* Wrap buttons in a div */}
          <button type="submit">Log in</button>
          <button type="button" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
