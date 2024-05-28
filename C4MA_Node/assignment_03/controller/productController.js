const product = [
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
];

//get all data
exports.getProduct = (req, res) => {
  res.send(product);
};

// retrieving data based on id

exports.getProductOnId = (req, res) => {
  const id = Number(req.params.id);
  const product_detail = product.find((item) => item.id === id);
  res.send(product_detail);
};

// update using query parameters

exports.updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const product_detail = product.find((item) => item.id === id);
  product_detail.product_name = req.query.name;
  product_detail.product_catagory = req.query.catagory;
  res.send(product_detail);
};

// create using post request
exports.createProduct = (req, res) => {
  const newPro = {
    id: product.length + 1,
    product_name: req.body.product_name,
    product_catagory: req.body.product_catagory,
  };
  product.push(newPro);
  console.log(product);
  res.send(product);
};

// delete an object
exports.deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const product_index = product.findIndex((item) => item.id === id);
  product.splice(product_index, 1);
  res.send(product);
};
