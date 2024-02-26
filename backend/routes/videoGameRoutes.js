const express = require('express');
const videoGameController = require('../controllers/videoGameController');
const videoGameRouter = express.Router();

videoGameRouter.post('/addgames', videoGameController.addGames);
videoGameRouter.get('/topvideogames', videoGameController.topVideogames);
module.exports = videoGameRouter;