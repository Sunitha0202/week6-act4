const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
});

const Car = mongoose.model("Car", bookSchema);

// Get all Books
const getBooks = async (req, res) => {
  const books = await Car.find({});
  res.status(200).json(books);
};

// Add one Book
const addBook = async (req, res) => {
  const { title, author, genre } = req.body;
  const newBook = new Car({ title, author, genre });
  await newBook.save();
  res.status(201).json(newBook);
};

// Delete Book by ID
const deleteBook = async (req, res) => {
  const { id } = req.params;

  const book = await Car.findByIdAndDelete(id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.status(200).json({ message: "Book deleted successfully" });
};

// Delete all Books
const deleteAllBooks = async (req, res) => {
  const result = await Car.deleteMany({}); 
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} books successfully` });
};

// update all Books
const updateBook = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const books = await Car.find({});
  res.status(200).json(books);
};
const getRoot = (req, res) => {
  res.json({ message: "I am Sunitha" });
};
module.exports = { getBooks, addBook, deleteBook, deleteAllBooks, updateBook, getRoot };