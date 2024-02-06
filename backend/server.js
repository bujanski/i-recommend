const express = require('express');
const {testConnection} = require('./config/connection');
const Book = require('./models/bookModel');
const Movie = require('./models/movieModel');
const Videogame = require('./models/videogameModel');

const app = express();
const port = 8000;

app.use(express.json());

testConnection();

app.listen(port, () => {
    console.log('Listening on port: ', port)
});