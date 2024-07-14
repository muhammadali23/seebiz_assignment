const user = [];
exports.user = user;
//for signup
exports.userSignUp = (req, res) => {
  const userForSignUp = {
    email: req.body.email,
    password: req.body.password,
  };
  user.push(userForSignUp);
  res.status(200).send("Successfully signUp");
  console.log(user);
};

// for login

exports.userLogin = (req, res) => {
  req.session.email = req.body.email;
  res.cookie("login_email", req.body.email, { maxAge: 30000 });
  return res.send("Data set to cookies");
};

exports.getData = (req, res) => {
  let user_login_email = req.cookies.login_email;
  let user_session_email = req.session.email;
  console.log("user_login_email", user_login_email);
  console.log("user_session_email", user_session_email);
  if (user_login_email == user_session_email) {
    res.status(200).send({ user: user_session_email });
  } else {
    res.status(500).send({ user: "login required" });
  }
};
