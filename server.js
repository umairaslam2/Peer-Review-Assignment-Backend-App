const express = require('express');
const app = express();
const booksRoutes = require('./routes/books');
const userRoutes = require('./routes/users');

app.use(express.json());

let books = {
  "9783161484100": {
    title: "Node.js in Action",
    author: "Mike Cantelon",
    reviews: {}
  },
  "9780132350884": {
    title: "Clean Code",
    author: "Robert C. Martin",
    reviews: {}
  },
  "9781491950296": {
    title: "Learning React",
    author: "Alex Banks",
    reviews: {}
  }
};

// Make books accessible to routes
app.locals.books = books;

app.use('/books', booksRoutes);
app.use('/', userRoutes);

// Task 5: Get book reviews
app.get('/review/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  if (book) return res.json(book.reviews);
  res.status(404).json({ message: "Book not found" });
});

// Task 8: Add or Modify Review
app.put('/auth/review/:isbn', (req, res) => {
  const { username, review } = req.body;
  const book = books[req.params.isbn];
  if (!book) return res.status(404).json({ message: "Book not found" });
  if (!username || !review) return res.status(400).json({ message: "Username and review required" });

  book.reviews[username] = review;
  res.json({ message: "Review added/updated successfully", reviews: book.reviews });
});

// Task 9: Delete review
app.delete('/auth/review/:isbn', (req, res) => {
  const { username } = req.body;
  const book = books[req.params.isbn];
  if (!book || !book.reviews[username]) {
    return res.status(404).json({ message: "Review by this user not found" });
  }
  delete book.reviews[username];
  res.json({ message: "Review deleted successfully", reviews: book.reviews });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
