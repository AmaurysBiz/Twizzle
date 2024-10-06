import React, { useState, useEffect } from 'react';
import './ContentSchedule.css'; // Ensure you create this CSS file in src folder


function ContentSchedule() {
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [scheduledPosts, setScheduledPosts] = useState([]);
  const [posted, setPosted] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const postsToPost = scheduledPosts.filter(post => 
        new Date(`${post.date} ${post.time}`) <= now
      );
      if (postsToPost.length > 0) {
        setPosted(prev => [...prev, ...postsToPost]);
        setScheduledPosts(prev => 
          prev.filter(post => !postsToPost.includes(post))
        );
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [scheduledPosts]);

  const scheduleContent = () => {
    const newPost = { content, date, time };
    setScheduledPosts([...scheduledPosts, newPost]);
    setContent('');
    setDate('');
    setTime('');
  };

  return (
    <div className="schedule-container">
      <div className="form">
        <h2>Content Schedule Page</h2>
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={scheduleContent}>Schedule</button>
      </div>
      <div className="posted-content">
        <h3>Scheduled Content</h3>
        {scheduledPosts.map((post, index) => (
          <div key={index}>
            <p>{post.content}</p>
            <p>{post.date} at {post.time}</p>
          </div>
        ))}
        <h3>Posted Content</h3>
        {posted.map((post, index) => (
          <div key={index}>
            <p>{post.content}</p>
            <p>Posted</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentSchedule;
