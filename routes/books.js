const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json(req.app.locals.books));

router.get('/:isbn', (req, res) => {
  const book = req.app.locals.books[req.params.isbn];
  if (book) return res.json(book);
  res.status(404).json({ message: "Book not found" });
});

router.get('/author/:author', (req, res) => {
  const author = req.params.author.toLowerCase();
  const filtered = {};
  for (const isbn in req.app.locals.books) {
    if (req.app.locals.books[isbn].author.toLowerCase() === author) {
      filtered[isbn] = req.app.locals.books[isbn];
    }
  }
  Object.keys(filtered).length > 0
    ? res.json(filtered)
    : res.status(404).json({ message: "No books found by this author" });
});

router.get('/title/:title', (req, res) => {
  const title = req.params.title.toLowerCase();
  const filtered = {};
  for (const isbn in req.app.locals.books) {
    if (req.app.locals.books[isbn].title.toLowerCase() === title) {
      filtered[isbn] = req.app.locals.books[isbn];
    }
  }
  Object.keys(filtered).length > 0
    ? res.json(filtered)
    : res.status(404).json({ message: "No books found with this title" });
});

module.exports = router;
