const express = require("express");
const app = express();
const auth_route = require("./routes/auth_route");
// app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/", auth_route);

app.listen(4000, () => {
  console.log("server started at port:4000");
});
