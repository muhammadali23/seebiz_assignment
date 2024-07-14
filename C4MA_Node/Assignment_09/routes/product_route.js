const express = require("express");
const Router = express.Router();
const productController = require("../controllers/product_controller");

Router.post("/createProduct", productController.createProduct);
Router.get("/aggregateProduct", productController.productPerCategory);
Router.get(
  "/averagePricePerCategory",
  productController.averagePricePerCategory
);
Router.get(
  "/groupProductByAttribute",
  productController.groupProductByAttribute
);
module.exports = Router;
