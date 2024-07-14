const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  quantity: Number,
  attribute: {
    color: String,
  },
});

const Model = mongoose.model("Product", productSchema);
module.exports = Model;
