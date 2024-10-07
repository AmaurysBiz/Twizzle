import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from './Config/config';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function Registration() {


  const navigate = useNavigate();

  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    if(passwordRef.current.value !== confirmPasswordRef.current.value){
      NotificationManager.error("Passwords do not match!");
    }
    else{
      axios.post(`${API.apiUrl}/register`, payload).then((res)=>{
        console.log(res);
        navigate("/login");
      }).catch((e)=>{
        console.log(e);
        NotificationManager.error("Something went wrong!")
      })
    }
  };

  return (
    <div className="register-container">
      <NotificationContainer/>
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          ref={userNameRef}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={emailRef}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
          required
        />
        <div style={{ textAlign: 'center' }}>
          <button type="submit">Register</button>
          <button type="button" onClick={() => navigate('/login')}>Log in</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
