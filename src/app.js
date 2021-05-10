const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world!'
  });
});

app.post('/palindrome', (req, res) => {
  const re = /[\W_]/g;
  const { word } = req.body;
  const clean_word = word.replace(re, '');
  const splitted_word = clean_word.split('');
  const reversed_word = splitted_word.reverse().join('');
  const is_palindrome = clean_word.toLowerCase() === reversed_word.toLowerCase();
  res.json({
    is_palindrome
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
