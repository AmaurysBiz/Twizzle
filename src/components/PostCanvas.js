import React, { useState } from 'react';
import './PostCanvas.css';

const PostCanvas = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [platform, setPlatform] = useState('Instagram');
  const [scheduledDate, setScheduledDate] = useState('');

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    // Placeholder for form submission logic
    alert('Post submitted successfully!');
  };

  return (
    <div className="post-canvas-container">
      <h2>Create a New Post</h2>
      
      {/* Post Creation Form */}
      <div className="post-form">
        <label>Write your post:</label>
        <textarea 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="What's on your mind?"
        />

        <label>Upload an image:</label>
        <input type="file" onChange={handleImageUpload} />

        <label>Select platform:</label>
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
        </select>

        <label>Schedule post:</label>
        <input 
          type="datetime-local" 
          value={scheduledDate} 
          onChange={(e) => setScheduledDate(e.target.value)} 
        />
        
        <button onClick={handleSubmit} className="submit-button">Submit Post</button>
      </div>

      {/* Preview Section */}
      <div className="post-preview">
        <h3>Preview</h3>
        <p>{text}</p>
        {image && <img src={image} alt="Post preview" />}
        <p>Scheduled for: {scheduledDate}</p>
        <p>Platform: {platform}</p>
      </div>
    </div>
  );
};

export default PostCanvas;
