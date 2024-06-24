const User = require("../model/user_model");
const Product = require("../model/product_model");

exports.createProduct = async (req, res) => {
  try {
    let email = req.params.email;
    console.log("user email== ", email);
    const userOfProduct = await User.findOne({ email });
    console.log("userProduct== ", userOfProduct);
    const updateProduct = await Product.findOneAndUpdate(
      { email },
      {
        ...req.body,
        userId: userOfProduct._id,
      },
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).send(updateProduct);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("An error occurred: " + error.message);
  }
};

exports.findProduct = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).send("user not found");
    } else {
      const productItem = await Product.find({ userId: user._id }).populate(
        "userId",
        "email firstName"
      );
      res.status(200).send(productItem);
    }
  } catch (error) {
    console.log("error", error);
  }
};
