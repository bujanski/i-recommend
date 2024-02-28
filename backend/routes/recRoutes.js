const express = require('express');
const recRouter = express.Router();
const recController = require('../controllers/recController');

userRouter.get('/', recController.getAllRecLists);

userRouter.get('/:username', recController.getARecList);

userRouter.get('/:id/recs/:category', recController.getRecs);

userRouter.delete(':/id', recController.deleteRecList);

userRouter.post('/newUser', recController.updateRecs);



module.exports = recRouter;