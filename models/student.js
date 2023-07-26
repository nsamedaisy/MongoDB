const mongoose = require("../db")

const Schema = mongoose.Schema;
const studentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: String,
  phone: String,
  email: String,
  sex: { type: String, required: true },
  level: String,
  address: String,
  town: String,
  region: String,
  country: String,
  score: Number,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student
