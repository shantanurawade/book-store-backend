import express from 'express';
import * as userController from '../controller/user.controller.js';
import userData from '../models/user.model.js'
import { authenticateuser } from '../middlewares/authenticate.user.js';

const route = express.Router();

const userRouter = () => {

    route.get('/get', authenticateuser, userController.getUserById);
    route.post('/register', userController.registerUser);
    route.post('/login', userController.login);
    route.patch('/addToCart', authenticateuser, userController.addToCart);
    route.patch('/addToWishlist', authenticateuser, userController.addToWishlist);

    return route;
}

export default userRouter;