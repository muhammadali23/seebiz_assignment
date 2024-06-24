const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    min: 15,
    max: 60,
    default: null,
  },
  lastName: {
    type: String,
    min: 15,
    max: 60,
    default: null,
  },
  email: String,
  fatherName: {
    type: String,
    min: 15,
    max: 60,
    default: null,
  },
  Age: Number,
  gender: String,
  bloodGroup: String,
  religion: String,
  MartialStatus: Boolean,
  isEmployeed: Boolean,
});

module.exports = mongoose.model("User", userSchema);
