const express = require('express');
const recRouter = express.Router();
const recController = require('../controllers/recController');

recRouter.get('/:userId', recController.getUserRecs);
recRouter.put('/update-rankings', recController.updateRankings);
recRouter.post('/addRec', recController.addRec)
recRouter.get('/top/:category', recController.getTop25)

module.exports = recRouter;