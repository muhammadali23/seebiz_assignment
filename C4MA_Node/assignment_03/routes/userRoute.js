const express = require("express");
const Router = express.Router();
const userController = require("../controller/userController");

Router.get("/", userController.getUser);
Router.get("/:id", userController.getUserOnId);
Router.post("/:id", userController.updateUser);
Router.delete("/:id", userController.deleteUser);
Router.post("/", userController.createUser);
module.exports = Router;
