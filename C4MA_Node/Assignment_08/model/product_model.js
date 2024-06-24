const User = require("./user_model");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  email: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  manufacturingDate: {
    type: Date,
    default: Date.now,
  },
  expiryData: {
    type: Date,
    default: Date.now,
  },
  quantity: {
    type: Number,
    default: null,
  },
});
productSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate();
  if (update.price == 0) {
    const err = new Error("Price can't be zero!");
    return next(err);
  }
  next();
});
productSchema.post("save", function (doc, next) {
  const response = {
    title: doc.title,
    category: doc.category,
    price: doc.price,
  };
  // Attach the response to the document
  doc._doc.response = response;
  next();
});

const Model = mongoose.model("Product", productSchema);

module.exports = Model;
