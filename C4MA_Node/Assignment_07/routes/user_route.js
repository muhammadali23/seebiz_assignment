const express = require("express");
const app = express();
app.use(express.json());
const Router = express.Router();
const userController = require("../controller/user_controller");

Router.post("/createUser", userController.createUser);
Router.get("/getUser", userController.getUser);
Router.get("/getOneUser", userController.getOneUser);
Router.post("/updateUser/:id", userController.updateUser);
Router.delete("/deleteUser/:id", userController.deleteUser);

module.exports = Router;
