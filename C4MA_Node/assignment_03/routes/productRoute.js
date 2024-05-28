const express = require("express");
const Router = express.Router();
const productController = require("../controller/productController");

Router.get("/", productController.getProduct);
Router.get("/:id", productController.getProductOnId);
Router.post("/:id", productController.updateProduct);
Router.delete("/:id", productController.deleteProduct);
Router.post("/", productController.createProduct);
module.exports = Router;
