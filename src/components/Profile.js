import React, { useEffect, useReducer, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import axios from "axios";
import { API } from "../Config/config";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


const Profile = () => {
  const username = "Amaury"; // Placeholder, to be replaced with dynamic data
  const bio = "This is your bio. Tell us something about yourself!";
  const email = "amaury@example.com"; // Placeholder
  const profilePic = "https://via.placeholder.com/150"; // Placeholder for profile picture

  const [data, setData] = useState({});

  // Fetch data from the backend API
  const id = localStorage.getItem("userId");

  const userNameRef = useRef();
  const bioRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [image, setImage] = useState("");

  const fetchData = () => {
    try {
      axios
        .get(`${API.apiUrl}/users/${id}`)
        .then((res) => {
          console.log(res);
          setData(res.data);
          userNameRef.current.value = res.data?.userName;
          emailRef.current.value = res.data?.email;
          bioRef.current.value = res.data?.bio;
          setImage(res.data?.image);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function readFile(e) {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      (function (file) {
        let reader = new FileReader();
        reader.onload = () => {
          console.log(reader.result);
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      })(files[i]);
    }
  }


  const editProfile = () => {
    const payload = {
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      bio: bioRef.current.value,
      image
    }

    axios.patch(`${API.apiUrl}/users/${id}`, payload).then((res)=>{
      console.log(res);
      NotificationManager.success("Profile Updated!");
    }).catch((e)=>{
      NotificationManager.error("Something went wrong!");
      console.log(e);
    })
  }

  return (
    <div className="profile-container">
      <NotificationContainer/>
      {/* Profile Picture and Information */}
      <div className="profile-header">
        {image === undefined ? (
          <>
            <img src={profilePic} alt="Profile" className="profile-picture" />
          </>
        ) : (
          <>
            <img src={image} alt="Profile" className="profile-picture" />
          </>
        )}
        <br />
        <input type="file" name="file" onChange={readFile} />
        <br /> <br />
        <label>User Name: </label>
        <br />
        <input type="text" ref={userNameRef} />
        <br />
        <br />
        <label>Add Your Bio: </label>
        <textarea ref={bioRef} placeholder="Bio"></textarea>
        <br /> <br />
        <label>Email: </label>
        <br />
        <input type="text" ref={emailRef} />
        <br /> <br />
        <button className="edit-button" onClick={editProfile}>
          Save Changes
        </button>
      </div>

      {/* Social Media Accounts */}
      <div className="social-media-accounts">
        <h3>Connected Accounts</h3>
        <ul>
          <li>Instagram: Connected</li>{" "}
          {/* Placeholder for connected accounts */}
          <li>Facebook: Connected</li>
        </ul>
        <Link to="/connect-accounts" className="connect-button">
          Connect/Disconnect Accounts
        </Link>
      </div>

      {/* Account Settings */}
      <div className="account-settings">
        <Link to="/settings" className="settings-button">
          Account Settings
        </Link>
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
