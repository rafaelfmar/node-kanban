const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/node-kanban', {
  useNewUrlParser: true
});

app.get('/', (req, res) => {
  res.send('Hello node');
});

app.listen(3000);
