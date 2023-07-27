const mongoose = require("../db");

const Schema = mongoose.Schema;
const cohortSchema = new Schema({
  name: String,
  startingMonth: String,
  startingYear: String,
});

const Cohort = mongoose.model("Cohort", cohortSchema);

module.exports = Cohort;
