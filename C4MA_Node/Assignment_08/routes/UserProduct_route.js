const express = require("express");
const app = express();
const Router = express.Router();
const userController = require("../controllers/user_controller");
const productController = require("../controllers/product_controller");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());

Router.post("/createUser/:email", userController.createUser);
Router.post("/createProduct/:email", productController.createProduct);
Router.post("/findProduct/:email", productController.findProduct);
module.exports = Router;
