const express = require('express');
const movieController = require('../controllers/movieController');
const movieRouter = express.Router();

movieRouter.get('/:searchText', movieController.movieSearch);

module.exports = movieRouter;