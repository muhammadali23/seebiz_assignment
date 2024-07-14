const express = require("express");
const app = express();
const auth_route = require("./routes/auth_route");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(
  session({
    secret: "abc",
    saveUninitialized: true,
    resave: false,
  })
);

app.use(bodyParser.json());
app.use(express.json());

app.use("/", auth_route);

app.listen(4000, () => {
  console.log("server started at port 4000");
});
