const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const mongoURI = "mongodb+srv://amaurysbiz9519:cHeAHL51HlX0zIrS@cluster0.hgiak.mongodb.net/twizzle?retryWrites=true&w=majority";


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((err) => {
  console.error('Failed to connect to MongoDB Atlas', err);
});

// Define the /api/data route
app.get('/api/data', (req, res) => {
  const mockData = {
    followers: 100,
    engagementRate: '5.5%',
    scheduledPostsCount: 3
  };
  res.json(mockData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
