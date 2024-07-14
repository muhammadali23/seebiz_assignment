const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user_route");
const bodyParser = require("body-parser");

mongoose
  .connect("mongodb://localhost:27017/userInfo")
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
app.use(bodyParser.json());
app.use("/", userRoute);
app.listen("5000", () => {
  console.log("server started");
});
