const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:id', userController.getAUser);

userRouter.delete(':/id', userController.deleteUser);

//put

module.exports = userRouter;