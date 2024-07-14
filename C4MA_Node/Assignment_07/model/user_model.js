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
  MartialStatus: String,
  isEmployeed: Boolean,
  // createdAt: {
  //   type: Date(),
  //   default: () => Date.now(),
  // },
});

module.exports = mongoose.model("User", userSchema);
