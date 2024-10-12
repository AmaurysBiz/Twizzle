import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css"; // Import appropriate CSS file
import logo from "../Images/logo.webp";

const Sidebar = () => {
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  const logout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div className="sidebar">
      {/* Logo at the top left */}
      <div className="logo">
        <img src={logo} alt="Logo"/>{" "}
        {/* Add your logo path */}
      </div>

      {/* Sidebar links */}

      {userId && (
        <>
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/analytics">Analytics</Link>
          <Link to="/content-library">Library</Link>
          <Link to="/usercontent">My Content</Link>
          <Link to="/schedule">Content Schedule</Link>
          <Link to="/post-canvas">Post Canvas</Link>
          <Link to="/video-canvas">Video Canvas</Link>
        </>
      )}

      <Link to="/instagram">Instagram</Link>
      <Link to="/facebook">Facebook</Link>

      {/* Add Login/Logout and Register at the bottom */}
      {userId ? (
        <>
          <button onClick={() => logout()}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
        </>
      )}
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Sidebar;
