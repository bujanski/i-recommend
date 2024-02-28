const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:username', userController.getAUser);

userRouter.post('/login', userController.loginUser);

userRouter.get('/:id/recs/:category', userController.getRecs);

userRouter.delete(':/id', userController.deleteUser);

userRouter.post('/newUser', userController.newUser);



module.exports = userRouter;