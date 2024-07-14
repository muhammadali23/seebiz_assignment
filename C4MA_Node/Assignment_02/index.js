const express = require("express");
const app = express();

const arr = [
  {
    id: 1,
    product_name: "Soap",
    product_catagory: "Cosmatic",
  },
  {
    id: 2,
    product_name: "Ceiling Fan",
    product_catagory: "Electric",
  },
  {
    id: 3,
    product_name: "Water Bottle",
    product_catagory: "Home appliance",
  },
  {
    id: 4,
    product_name: "Body wash",
    product_catagory: "Cosmatic",
  },
  {
    id: 5,
    product_name: "Ball pen",
    product_catagory: "Stationary",
  },
];

//get the data of all users
app.get("/product", (req, res) => {
  console.log(req.query);
  res.send(arr);
});

//get data base on id

app.get("/product/:id", (req, res) => {
  const id = Number(req.params.id);
  const pro_duct = arr.find((product) => product.id === id);
  console.log(id);
  return res.json(pro_duct);
});

//update data using query parameters
app.patch("/product/updateData/:id", (req, res) => {
  const id = Number(req.params.id);
  const pro_duct = arr.find((product) => product.id === id);
  pro_duct.product_name = req.query.name;
  pro_duct.product_catagory = req.query.catagory;
  return res.json(pro_duct);
});

//delete data base on specific id
app.delete("/product/deleteData/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = arr.findIndex((product) => product.id === id);
  arr.splice(productIndex, 1);
  return res.json(arr);
});

// app.patch("//product/:id",(req,res))
app.listen(4000, () => {
  console.log("Server started at port: 4000");
});
