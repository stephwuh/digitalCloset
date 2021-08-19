const express = require('express');
const authRouter = express.Router();
const controller = require('./authController.js')


authRouter.post('/signup', controller.signUp);
authRouter.post('/login', controller.login);


module.exports = authRouter;
