const express = require('express');
const bookController = require('../controllers/bookController');
const bookRouter = express.Router();

bookRouter.get('/search/:searchText', bookController.bookSearch);

bookRouter.get('/book/:id', bookController.getBook);


module.exports = bookRouter;