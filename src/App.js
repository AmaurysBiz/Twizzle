import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Home from './components/Home';
import Profile from './components/Profile'; 
import Analytics from './components/Analytics'; 
import ContentLibrary from './components/ContentLibrary'; 
import ContentSchedule from './ContentSchedule';
import Instagram from './components/instagram';
import Facebook from './components/Facebook';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PostCanvas from './components/PostCanvas';
import VideoCanvas from './components/VideoCanvas';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />  {/* Now redirects to login */}
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/content-library" element={<ContentLibrary />} />
            <Route path="/schedule" element={<ContentSchedule />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/facebook" element={<Facebook />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/post-canvas" element={<PostCanvas />} />
            <Route path="/video-canvas" element={<VideoCanvas />} />
            <Route path="/canvas" element={<Canvas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
