const express = require('express');
const weatherRouter = express.Router();
const controller = require('./weatherController.js');


weatherRouter.post('/updateZipCode', controller.updateZipCode);
weatherRouter.get('/getZipCode', controller.getZipCode);

module.exports = weatherRouter;
