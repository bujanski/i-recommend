const express = require('express');
const videoGameController = require('../controllers/videoGameController');
const videoGameRouter = express.Router();


videoGameRouter.get('/search/:searchText', videoGameController.videoGameSearch)
videoGameRouter.get('/videogame/:id', videoGameController.getVideogame)

module.exports = videoGameRouter;