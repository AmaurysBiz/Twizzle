import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const username = "Amaury"; // Placeholder, to be replaced with dynamic data
  const bio = "This is your bio. Tell us something about yourself!";
  const email = "amaury@example.com"; // Placeholder
  const profilePic = "https://via.placeholder.com/150"; // Placeholder for profile picture

  return (
    <div className="profile-container">
      {/* Profile Picture and Information */}
      <div className="profile-header">
        <img src={profilePic} alt="Profile" className="profile-picture" />
        <h2>{username}</h2>
        <p>{bio}</p>
        <p>Email: {email}</p>
        <Link to="/edit-profile" className="edit-button">Edit Profile</Link>
      </div>

      {/* Social Media Accounts */}
      <div className="social-media-accounts">
        <h3>Connected Accounts</h3>
        <ul>
          <li>Instagram: Connected</li> {/* Placeholder for connected accounts */}
          <li>Facebook: Connected</li>
        </ul>
        <Link to="/connect-accounts" className="connect-button">Connect/Disconnect Accounts</Link>
      </div>

      {/* Account Settings */}
      <div className="account-settings">
        <Link to="/settings" className="settings-button">Account Settings</Link>
      </div>

      {/* Profile Stats Overview */}
      <div className="profile-stats">
        <h3>Profile Statistics</h3>
        <p>Total Scheduled Posts: [Posts]</p> {/* Placeholder for stats */}
        <p>Total Followers: [Followers]</p>
        <p>Engagement Rate: [EngagementRate]</p>
      </div>
    </div>
  );
};

export default Profile;
