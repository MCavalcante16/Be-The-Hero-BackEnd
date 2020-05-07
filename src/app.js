const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://maurikin:32669588@cluster0-dfs4d.mongodb.net/bethehero?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

