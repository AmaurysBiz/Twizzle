const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://amaurysbiz9519:cHeAHL51HlX0zIrS@cluster0.hgiak.mongodb.net/twizzle?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('Failed to connect to MongoDB Atlas', err);
  }
};

module.exports = connectDB;

