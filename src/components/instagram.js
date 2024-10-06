import React, { useState } from 'react';
import './instagram.css';

const Instagram = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [userData, setUserData] = useState(null);
  const [newPost, setNewPost] = useState('');

  const handleConnect = () => {
    // Placeholder for OAuth authentication logic
    alert('Instagram account connected successfully!');
    setIsConnected(true);

    // Placeholder for fetching user data from Instagram API
    setUserData({
      username: 'insta_user',
      followers: 2500,
      posts: 120,
      engagementRate: '5%'
    });
  };

  const handlePost = () => {
    // Placeholder for posting to Instagram
    alert(`New post submitted: ${newPost}`);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setUserData(null);
  };

  return (
    <div className="instagram-container">
      <h2>Instagram API Integration</h2>

      {!isConnected ? (
        <button onClick={handleConnect} className="connect-button">Connect Instagram</button>
      ) : (
        <>
          {/* Display user data */}
          <div className="instagram-data">
            <h3>Connected Account</h3>
            <p>Username: {userData.username}</p>
            <p>Followers: {userData.followers}</p>
            <p>Total Posts: {userData.posts}</p>
            <p>Engagement Rate: {userData.engagementRate}</p>

            {/* Create New Post */}
            <div className="new-post">
              <h4>Create New Post</h4>
              <textarea 
                value={newPost} 
                onChange={(e) => setNewPost(e.target.value)} 
                placeholder="Write your Instagram post..."
              />
              <button onClick={handlePost} className="post-button">Submit Post</button>
            </div>

            {/* Disconnect Account */}
            <button onClick={handleDisconnect} className="disconnect-button">Disconnect Instagram</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Instagram;
