import React from 'react';
import './ContentLibrary.css';

const ContentLibrary = () => {
  const contentItems = [
    // Placeholder data for now
    { id: 1, type: 'Image', platform: 'Instagram', engagement: '200 likes', date: '2024-09-25', thumbnail: 'https://via.placeholder.com/150' },
    { id: 2, type: 'Video', platform: 'Facebook', engagement: '150 views', date: '2024-09-22', thumbnail: 'https://via.placeholder.com/150' },
    { id: 3, type: 'Text', platform: 'Instagram', engagement: '50 comments', date: '2024-09-20', thumbnail: 'https://via.placeholder.com/150' }
  ];

  return (
    <div className="content-library-container">
      {/* Content Library Header */}
      <div className="library-header">
        <h2>Content Library</h2>
        <button className="upload-button">Upload New Content</button>
      </div>

      {/* Filter and Sort Options */}
      <div className="filter-sort">
        <label>
          Filter by Type:
          <select>
            <option value="all">All</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
            <option value="text">Text</option>
          </select>
        </label>
        <label>
          Sort by:
          <select>
            <option value="date">Date</option>
            <option value="engagement">Engagement</option>
            <option value="platform">Platform</option>
          </select>
        </label>
      </div>

      {/* Content Grid */}
      <div className="content-grid">
        {contentItems.map(item => (
          <div key={item.id} className="content-item">
            <img src={item.thumbnail} alt={item.type} />
            <div className="content-details">
              <p>Type: {item.type}</p>
              <p>Platform: {item.platform}</p>
              <p>Engagement: {item.engagement}</p>
              <p>Date: {item.date}</p>
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default ContentLibrary;
