const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: [String],
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  canonicalVolumeLink: {
    type: String,
  },
});

const Books = mongoose.model("Books", BooksSchema);
module.exports = Books;
