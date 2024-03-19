const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getBooks,
  addBook,
  deleteAllBooks,
  updateBook,
  getRoot
} = require("./controller");

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get('/', getRoot); // getRoot is used as a callback
app.get("/books", getBooks);
app.post("/books", addBook);
app.delete("/books", deleteAllBooks);
app.put("/books/:id", updateBook);

const PORT = 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});