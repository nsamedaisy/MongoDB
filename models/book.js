// create a model 

const mongoose = require("../db");

const Schema = mongoose.Schema;
const bookSchema = new Schema({
  title: String,
  author: String,
  category: String,
  price: Number,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
