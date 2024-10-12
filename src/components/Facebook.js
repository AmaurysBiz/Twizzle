import React, { useState } from 'react';
import './Facebook.css';
import FacebookLogin from 'react-facebook-login';


const Facebook = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [userData, setUserData] = useState(null);
  const [newPost, setNewPost] = useState('');

  const handleConnect = () => {
    // Placeholder for OAuth authentication logic
    alert('Facebook account connected successfully!');
    setIsConnected(true);

    // Placeholder for fetching user data from Facebook API
    setUserData({
      username: 'facebook_user',
      followers: 3200,
      posts: 200,
      engagementRate: '4.5%'
    });
  };

  const handlePost = () => {
    // Placeholder for posting to Facebook
    alert(`New post submitted: ${newPost}`);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setUserData(null);
  };

  return (
    <div className="facebook-container">
      <h2>Facebook API Integration</h2>

      {!isConnected ? (
        <button onClick={handleConnect} className="connect-button">Connect Facebook</button>
      ) : (
        <>
          {/* Display user data */}
          <div className="facebook-data">
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
                placeholder="Write your Facebook post..."
              />
              <button onClick={handlePost} className="post-button">Submit Post</button>
            </div>

            {/* Disconnect Account */}
            <button onClick={handleDisconnect} className="disconnect-button">Disconnect Facebook</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Facebook;
