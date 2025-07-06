const express = require('express');
const router = express.Router();

let users = [];

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: "Username and password required" });

  const userExists = users.find(user => user.username === username);
  if (userExists) return res.status(409).json({ message: "User already exists" });

  users.push({ username, password });
  res.status(201).json({ message: "User registered successfully" });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  user
    ? res.json({ message: "Login successful" })
    : res.status(401).json({ message: "Invalid username or password" });
});

module.exports = router;
