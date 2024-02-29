const express = require('express');
const cors = require('cors');
const movieRouter = require('./routes/movieRoutes');
const videoGameRouter = require('./routes/videoGameRoutes');
const userRouter = require('./routes/userRoutes');
const verifyAuthorization = require('./middleware/verifyAuthorization');
const {testConnection} = require('./config/connection');
const {seedDatabase} = require('./config/seedDirectory');
const bookRouter = require('./routes/bookRoutes');


const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

//app.use(verifyAuthorization);

app.use('/movies', movieRouter);
app.use('/videogames', videoGameRouter);
app.use('/users', userRouter);
app.use('/books', bookRouter)

testConnection();
// seedDatabase();

app.listen(port, () => {
    console.log('Listening on port: ', port)
});