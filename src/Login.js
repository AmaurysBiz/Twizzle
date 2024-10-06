import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <div style={{ textAlign: 'center' }}> {/* Wrap buttons in a div */}
          <button type="submit">Log in</button>
          <button type="button" onClick={() => navigate('/register')}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
