const express = require("express");
const app = express();
const productRoute = require("./routes/product_route");
const port = 6000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/ProductInfo")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
app.use("/", productRoute).listen(port, () => {
  console.log(`Server started at ${port}`);
});
