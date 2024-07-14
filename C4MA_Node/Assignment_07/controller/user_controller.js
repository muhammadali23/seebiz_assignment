const User = require("../model/user_model");
const Model = require("../model/product_model");
exports.createUser = (req, res) => {
  const user = req.body;
  User.create(user)
    .then((data) => {
      res.send(data);
      console.log("user created");
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

exports.getUser = (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};
exports.getOneUser = (req, res) => {
  User.findOne()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  User.findByIdAndUpdate(userId, updatedUser, {
    new: true,
    runValidators: true,
  })
    .then((updatedUser) => {
      if (!updatedUser) {
        res.status(404).send({ error: "user not found" });
      } else {
        res.status(200).send(updatedUser);
        console.log(updatedUser);
      }
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

exports.deleteUser = (req, res) => {
  const userId = req.params.id;
  User.findByIdAndDelete(userId)
    .then((deleteUser) => {
      if (!deleteUser) {
        res.status(404).send("User not found");
      } else {
        res.status(200).send({ message: "User deleted successfully" });
      }
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

exports.product = (req, res) => {
  const model = req.body;
  Model.create(model)
    .then((data) => {
      res.send(data);
      console.log("created....");
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};
