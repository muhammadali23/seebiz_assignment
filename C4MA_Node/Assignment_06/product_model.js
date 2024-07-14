const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    min: 15,
    max: 30,
  },
  catagory: String,
  quantity: Number,
  price: Number,
  attribute: {
    color: String,
    material: String,
  },
  group_price: [
    {
      quantity: Number,
      price: Number,
    },
  ],
  brand: {
    type: String,
    default: null,
  },
  available_status: boolean,
  CreatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
