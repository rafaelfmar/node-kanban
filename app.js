const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const List = require('./src/models/List');

mongoose.connect('mongodb://localhost:27017/node-kanban', {
  useNewUrlParser: true
});

app.use('/', require('./src/routes'));

app.listen(3000);
