const Product = require("../models/product_model");

//product creation
exports.createProduct = async (req, res) => {
  try {
    let productData = req.body;
    let product = await Product.create(productData);
    res.status(200).send(product);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("An error occurred: " + error.message);
  }
};

// find product per category
exports.productPerCategory = async (req, res) => {
  try {
    let data = await Product.aggregate([
      {
        $group: { _id: "$category", totalProducts: { $sum: 1 } },
      },
    ]);
    res.status(200).json({ message: "Calculated", data });
    console.log("data:  ", data);
  } catch (error) {
    console.log("error: ", error);
  }
};

// find average price par category
exports.averagePricePerCategory = async (req, res) => {
  try {
    let data = await Product.aggregate([
      {
        $group: { _id: "$category", averagePrice: { $avg: "$price" } },
      },
    ]);
    res.status(200).json({ message: "Average Calculated", data });
    console.log("data:  ", data);
  } catch (error) {
    console.log("error: ", error);
  }
};

// find average price and number of product par color
exports.groupProductByAttribute = async (req, res) => {
  try {
    let data = await Product.aggregate([
      {
        $group: {
          _id: "$attribute.color",
          averagePrice: { $avg: "$price" },
          totalProductByColor: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json({ message: "Average Calculated", data });
    console.log("data:  ", data);
  } catch (error) {
    console.log("error: ", error);
  }
};
