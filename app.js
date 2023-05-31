
// app.js
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./bookRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/bookstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use the book routes
app.use('/api', bookRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
