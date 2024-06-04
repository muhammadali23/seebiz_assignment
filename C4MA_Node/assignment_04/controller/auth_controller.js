const user = [
  {
    email: "ali@gmail.com",
    password: 1212,
  },
];
exports.userSignUp = (req, res) => {
  const userForSignUp = {
    email: req.body.email,
    password: req.body.password,
  };
  user.push(userForSignUp);
  res.send(user);
};
exports.userLogin = (req, res) => {
  const userData = {
    email: req.body.email,
  };
  for (let i = 0; i < user.length; i++) {
    if (userData.email === user[i].email) {
      res.send("Successfully loggedIn :)");
    } else {
      res.send("Wrong Credentials");
    }
  }
};

// && userData.password === user[i].password
//    password: req.body.password,
