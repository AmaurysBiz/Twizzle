import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import appropriate CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo at the top left */}
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Logo" />  {/* Add your logo path */}
      </div>

      {/* Sidebar links */}
      <Link to="/home">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/content-library">Library</Link>
      <Link to="/schedule">Content Schedule</Link>
      <Link to="/post-canvas">Post Canvas</Link>
      <Link to="/video-canvas">Video Canvas</Link>
      <Link to="/instagram">Instagram</Link>
      <Link to="/facebook">Facebook</Link>

      {/* Add Login/Logout and Register at the bottom */}
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Sidebar;
