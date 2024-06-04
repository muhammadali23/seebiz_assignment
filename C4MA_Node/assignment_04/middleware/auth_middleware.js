const user = [];

const validateEmail = (req, res, next) => {
  const email = req.body.email;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  next();
};

// Middleware to check if email already exists
const checkEmailExists = (req, res, next) => {
  const email = req.body.email;
  const existingUser = user.find((u) => u.email === email);

  if (existingUser) {
    return res.status(400).json({ error: "Email already exists" });
  }

  next();
};

module.exports = { validateEmail, checkEmailExists };
