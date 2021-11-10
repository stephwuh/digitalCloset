const express = require('express');
const clothingRouter = express.Router();
const controller = require('./clothingController.js')

clothingRouter.post('/upload', controller.upload );
clothingRouter.put('/update', controller.update);
clothingRouter.delete('/delete', controller.delete);

module.exports = clothingRouter;