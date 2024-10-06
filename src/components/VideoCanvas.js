import React, { useState } from 'react';
import './VideoCanvas.css';

const VideoCanvas = () => {
  const [video, setVideo] = useState(null);
  const [caption, setCaption] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [scheduledDate, setScheduledDate] = useState('');

  const handleVideoUpload = (e) => {
    setVideo(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    // Placeholder for form submission logic
    alert('Video submitted successfully!');
  };

  return (
    <div className="video-canvas-container">
      <h2>Create a New Video</h2>
      
      {/* Video Upload Form */}
      <div className="video-form">
        <label>Upload a video:</label>
        <input type="file" onChange={handleVideoUpload} />

        <label>Write a caption:</label>
        <textarea 
          value={caption} 
          onChange={(e) => setCaption(e.target.value)} 
          placeholder="Add a caption to your video"
        />

        <label>Select platform:</label>
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
        </select>

        <label>Schedule video:</label>
        <input 
          type="datetime-local" 
          value={scheduledDate} 
          onChange={(e) => setScheduledDate(e.target.value)} 
        />
        
        <button onClick={handleSubmit} className="submit-button">Submit Video</button>
      </div>

      {/* Preview Section */}
      <div className="video-preview">
        <h3>Preview</h3>
        {video && <video src={video} controls width="100%" />}
        <p>{caption}</p>
        <p>Scheduled for: {scheduledDate}</p>
        <p>Platform: {platform}</p>
      </div>
    </div>
  );
};

export default VideoCanvas;
