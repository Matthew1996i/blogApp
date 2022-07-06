const { Router } = require('express');
const { userController } = require('../controllers');

const userRouter = Router();

userRouter.post('/create', userController.createUser);
userRouter.post('/login', userController.UserLogin);

module.exports = userRouter;
