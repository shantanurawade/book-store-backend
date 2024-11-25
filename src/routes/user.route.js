import express from 'express';
import * as userController from '../controller/user.controller.js';
import { authenticateuser } from '../middlewares/authenticate.user.js';

const route = express.Router();

const userRouter = () => {

    route.get('/get', authenticateuser, userController.getUser);
    route.post('/register', userController.registerUser);
    route.post('/login', userController.login);
    route.patch('/addToCart', authenticateuser, userController.addToCart);
    route.patch('/addToWishlist', authenticateuser, userController.addToWishlist);
    route.patch('/placeOrder', authenticateuser, userController.placeOrder);

    return route;
}

export default userRouter;