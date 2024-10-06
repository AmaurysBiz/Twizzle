import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [data, setData] = useState({ followers: 0, engagementRate: '', scheduledPostsCount: 0 });

  // Fetch data from the backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');  // Fetch from the server
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome back, [Username]!</h1>
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
