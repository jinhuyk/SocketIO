const express = require('express');
const path = require('path');

const app = express();

const indexRouter = require('./backend/routes/index')
app.use(express.urlencoded({ extended: true }));


app.use(express.json());

app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/', indexRouter);
module.exports =app;

