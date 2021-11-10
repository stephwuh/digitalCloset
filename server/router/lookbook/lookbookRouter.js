const express = require('express');
const lookbookRouter = express.Router();
const controller = require('./lookbookController.js');


lookbookRouter.get('/getImages', controller.getImages);


module.exports = lookbookRouter;