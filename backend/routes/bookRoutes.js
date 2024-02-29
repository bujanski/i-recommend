const express = require('express');
const bookController = require('../controllers/bookController');
const bookRouter = express.Router();

bookRouter.get('/search/:searchText', bookController.bookSearch);
bookRouter.get('/topbooks', bookController.topBooks);

module.exports = bookRouter;