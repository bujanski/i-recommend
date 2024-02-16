const express = require('express');
const {testConnection} = require('./config/connection');
const Book = require('./models/bookModel');
const Movie = require('./models/movieModel');
const Videogame = require('./models/videogameModel');
const Recommendation = require('./models/recModel');
//const seedDatabase = require('./config/seedDirectory');
const {seedDatabase} = require('./config/seedDirectory');
const movieRouter = require('./routes/movieRoutes');
const videoGameRouter = require('./routes/videoGameRoutes');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

testConnection();

app.use('/movies', movieRouter);
app.use('/videogames', videoGameRouter);

//processMovieData();
// seedDatabase();

app.listen(port, () => {
    console.log('Listening on port: ', port)
});