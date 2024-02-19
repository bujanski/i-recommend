const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const verifyAuthorization = require('./middleware/verifyAuthorization');
const {testConnection} = require('./config/connection');
const Book = require('./models/bookModel');
const Movie = require('./models/movieModel');
const Videogame = require('./models/videogameModel');
const Recommendation = require('./models/recModel');
const User = require('./models/userModel');
const {seedDatabase} = require('./config/seedDirectory');

const app = express();
const port = 8000;

app.use(express.json());

//app.use(verifyAuthorization);

app.use('/users', userRouter);

testConnection();

//seedDatabase();

app.listen(port, () => {
    console.log('Listening on port: ', port)
});