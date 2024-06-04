const auth_controller = require("../controller/auth_controller");
const express = require("express");
const app = express();
const Router = express.Router();
const {
  checkEmailExists,
  validateEmail,
} = require("../middleware/auth_middleware");

Router.post("/signUp", validateEmail, auth_controller.userSignUp);
Router.post("/login", checkEmailExists, auth_controller.userLogin);
module.exports = Router;
