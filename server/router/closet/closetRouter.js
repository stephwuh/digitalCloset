const express = require('express');
const closetRouter = express.Router();
const controller = require('./closetController.js');


// axios request is actually a get request. using post to send userId to the server so it can retrieve the correct clothes
closetRouter.post('/getClothingImages', controller.getClothingImages);


module.exports = closetRouter;