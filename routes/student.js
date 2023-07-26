var express = require("express");
const Student = require("../models/student");
var router = express.Router();

// handler function
const respHandler = (res, student) => {
  console.log(student);
  return res.json({ status: "ok", student });
};

const errorHandler = (res, err) => {
  let errorMsg = "An error occured" + err;
  console.log(errorMsg);
  return res.json({ status: errorMsg }).status(500);
};

// GET students listing
router.get("/", function (req, res) {
  res.send("respond with a resource");
});

// POST create Student
router.post("/", function (req, res, next) {
  let student = new Student(req.body.student);
  student
    .save()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

// GET a single student by id
router.get("/:id", function (req, res) {
  Student.findById(req.params.id)
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

// DELETE student by id
router.delete("/:id", function (req, res) {
  Student.findByIdAndRemove(req.params.id)
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

//UPDATE student by id
router.post("/:id", function (req, res, next) {
  let student = req.body.body;
  Student.findByIdAndUpdate(student, { where: { id: req.params.id } })
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

module.exports = router;
