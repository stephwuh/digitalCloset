const express = require('express');
const outfitRouter = express.Router();
const controller = require('./outfitController.js')

outfitRouter.post('/upload', controller.upload);
outfitRouter.get('/load/:userId', controller.load);
outfitRouter.get('/getCategories/:userId', controller.getCategories);
outfitRouter.put('/update', controller.update);
outfitRouter.delete('/delete', controller.delete);

module.exports = outfitRouter;
