var express = require("express");
const Book = require("../models/book");
var router = express.Router();

//handler function
const respHandler = (res, book) => {
  console.log(book);
  return res.json({ status: "ok", book });
};

const errorHandler = (res, err) => {
  console.log("An error occured" + err);
  return res.json({ status: "An error occured" + err }).status(500);
};

// GET books
router.get("/", function (req, res) {
  res.send("respond with a resource");
});

// GET book by id
router.get("/:id", function (req, res) {
  Book.findById(req.params.id)
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

// DELETE book by id
router.delete("/:id", function (req, res) {
  Book.findByIdAndDelete(req.params.id)
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

// POST/CREATE book
router.post("/", function (req, res, next) {
  let book = new Book(req.body.book);
  book
    .save()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

// POST/UPDATE book by id
router.post("/:id", async function (req, res) {
  let id = req.params.id
  let book = req.body.book;
  await Book.findByIdAndUpdate(id, book)
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

module.exports = router;
