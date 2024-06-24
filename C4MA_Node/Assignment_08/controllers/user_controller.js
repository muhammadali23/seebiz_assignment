const User = require("../model/user_model");

exports.createUser = (req, res) => {
  let user = req.body;
  let email = req.params.email;
  User.findOneAndUpdate({ email }, user, { new: true, upsert: true })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send("error: ", error);
    });
};
