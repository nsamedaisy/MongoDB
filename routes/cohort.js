var express = require("express");
const Cohort = require("../models/cohort");
var router = express.Router();

// handler function
const respHandler = (res, cohort) => {
  console.log(cohort);
  return res.json({ status: "Cohort created successfully", cohort });
};

const errorHandler = (res, err) => {
  console.log("An error occured" + err);
  return res.json({ status: "An error occured" + err }).status(500);
};

// GET Cohorts
router.get("/", function (req, res) {
  res.send("respond with a resource");
});

// GET Cohort by id
router.get("/:id", function (req, res) {
  Cohort.findById(req.params.id)
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

// DELETE Cohort by id
router.delete("/:id", function (req, res) {
  Cohort.findByIdAndDelete(req.params.id)
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

// POST/CREATE Cohort
router.post("/", function (req, res, next) {
  let cohort = new Cohort(req.body.cohort);
  cohort
    .save()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

// POST/UPDATE Cohort by id
router.post("/:id", async function (req, res) {
  let id = req.params.id;
  let cohort = req.body.cohort;
  await Cohort.findByIdAndUpdate(id, cohort)
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

module.exports = router;
