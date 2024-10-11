const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const authSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },

  email: {
    required: true,
    type: String,
  },

  password: {
    required: true,
    type: String,
  },

  bio: {
    type: String,
  },

  image: {
    type: String,
  },

  userContent: {
    userImages: [
      {
        image: {
          type: String,
        },
        date: {
          type: Date,
          default: new Date(),
        },
      },
    ],
    userVideos: [
      {
        video: {
          type: String,
        },
        date: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
});

authSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }

  next();
});

const Auth = new mongoose.model("auth", authSchema);

module.exports = Auth;
