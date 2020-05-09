const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

