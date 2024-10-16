const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const Auth = require("./Model/Auth");
require("./DB/Conn");

const PORT = 8080;

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.post("/register", async (req, res) => {
  try {
    const addUser = new Auth(req.body);

    const findEmail = await Auth.find({ email: req.body.email });
    const findUserName = await Auth.find({ userName: req.body.userName });

    if (findEmail.length === 0 && findUserName.length === 0) {
      addUser
        .save()
        .then(() => {
          res.status(200).send(addUser);
        })
        .catch((e) => {
          res.status(404).send(e);
        });
    } else {
      res.status(404).send("User already exists");
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;

    const findUser = await Auth.findOne({ userName });

    if (findUser !== null) {
      const matchPassword = await bcrypt.compare(password, findUser.password);

      if (matchPassword) {
        res.status(200).send(findUser);
      } else {
        res.status(404).send("Invalid Password");
      }
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await Auth.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await Auth.findById(id);
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await Auth.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.post("/webhook", (req, res) => {
  // Handle the webhook data here
  console.log("Webhook event received: ", req.body);
  res.sendStatus(200);
});

app.get("/webhook", (req, res) => {
  try {
    const VERIFY_TOKEN = "twizzle-token";

    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && token === VERIFY_TOKEN) {
      // Respond with the challenge token from the request
      res.status(200).send(challenge);
    } else {
      // Respond with 403 Forbidden if tokens don't match
      res.sendStatus(403).send("Oops");
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

app.listen(PORT, () => {
  console.log("API is running on PORT: " + PORT);
});
