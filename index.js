const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint 1: String
app.get('/string', (req, res) => {
  res.send('Simple string response');
});

// Endpoint 2: Object
app.get('/object', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Endpoint 3: Array
app.get('/array', (req, res) => {
  res.json(['apple', 'banana', 'orange']);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
