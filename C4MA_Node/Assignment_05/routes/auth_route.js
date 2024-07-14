const express = require("express");
const Router = express.Router();
const app = express();
const auth_controller = require("../controller/auth_controller");

app.use(express.json());

// middleware to check email is valid
const validateEmail = (req, res, next) => {
  const email = req.body.email;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  next();
};

//middleware to check email exist
const checkEmailExists = (req, res, next) => {
  const email = req.body.email;
  console.log(email);
  const existingUser = auth_controller.user.find((u) => u.email == email);
  req.person = existingUser.email;

  next();
};

Router.post("/signup", validateEmail, auth_controller.userSignUp);
Router.post("/login", checkEmailExists, auth_controller.userLogin);
Router.get("/login/getdata", auth_controller.getData);
module.exports = Router;
