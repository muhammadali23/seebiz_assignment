const user = [
  {
    id: 1,
    name: "Muhammad Ali",
    city: "Tandlianwala",
  },
  {
    id: 2,
    name: "Faizan",
    city: "Multan",
  },
];

//get all data
exports.getUser = (req, res) => {
  res.send(user);
};

// retrieving data based on id

exports.getUserOnId = (req, res) => {
  const id = Number(req.params.id);
  const user_detail = user.find((person) => person.id === id);
  res.send(user_detail);
};

// update using query parameters

exports.updateUser = (req, res) => {
  const id = Number(req.params.id);
  const user_detail = user.find((person) => person.id === id);
  user_detail.name = req.query.name;
  user_detail.city = req.query.city;
  res.send(user_detail);
};

// create using post request
exports.createUser = (req, res) => {
  const newUser = {
    id: user.length + 1,
    name: req.body.name,
    city: req.body.city,
  };
  user.push(newUser);
  res.send(user);
};

// delete an object
exports.deleteUser = (req, res) => {
  const id = Number(req.params.id);
  const user_index = user.findIndex((person) => person.id === id);
  user.splice(user_index, 1);
  res.send(user);
};
