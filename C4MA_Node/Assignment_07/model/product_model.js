// const User = require("./user_model");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Model = mongoose.model("Product", productSchema);

module.exports = Model;
