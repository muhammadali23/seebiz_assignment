const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userProductRoute = require("./routes/UserProduct_route");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use("/", userProductRoute);
mongoose
  .connect("mongodb://localhost:27017/myProductInfo")
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("Error is this bla bla: ", error);
  });
app.listen(9000, () => {
  console.log("Server  started");
});
