const express = require('express');
const movieController = require('../controllers/movieController');
const movieRouter = express.Router();

movieRouter.get('/search/:searchText', movieController.movieSearch);

movieRouter.get('/movie/:id', movieController.getMovie)

module.exports = movieRouter;