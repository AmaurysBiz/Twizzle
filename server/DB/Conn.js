const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://amaurysbiz9519:cHeAHL51HlX0zIrS@cluster0.hgiak.mongodb.net/Twizzle?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Atlas");
  })
  .catch((e) => {
    console.log(e);
  });
