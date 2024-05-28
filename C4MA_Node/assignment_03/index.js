const express = require("express");
const app = express();
const Productroute = require("./routes/productRoute");
const UserRoute = require("./routes/userRoute");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/product", Productroute);
app.use("/user", UserRoute);

app.listen("8000", () => {
  console.log("server started");
});
