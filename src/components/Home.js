import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import { API } from '../Config/config';

const Home = () => {
  const [data, setData] = useState({});

  // Fetch data from the backend API
  const id = localStorage.getItem("userId");
  const fetchData = () => {
    try {
      axios.get(`${API.apiUrl}/users/${id}`).then((res)=>{
        console.log(res);
        setData(res.data);
      }).catch((e)=>{
        console.log(e);
      })
   
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome back, {data.userName}!</h1>
      <p>Your personalized content management dashboard.</p>
      <div className="analytics-overview">
        <h2>Your Analytics Overview</h2>
        <p>Total Followers: {data.followers}</p>
        <p>Engagement Rate: {data.engagementRate}</p>
        <p>Scheduled Posts: {data.scheduledPostsCount}</p>
      </div>

      <div className="actions">
        <button className="action-button">Create New Post</button>
        <button className="action-button">Schedule Post</button>
        <button className="action-button">Analyze Performance</button>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          <li>Posted a story on Instagram</li>
          <li>Scheduled a post for Facebook</li>
          <li>Updated profile information</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
