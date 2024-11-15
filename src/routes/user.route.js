import express, { Router } from 'express';
import * as userController from '../controller/user.controller.js';
import userData from '../models/user.model.js'
const route = express.Router();


const userRouter = () => {
    route.get('/get', userController.getAllUser);
    route.post('/register', userController.registerUser);
    route.post('/login', userController.login);


    route.get('/get/:_id', async (req, res) => {
        const data = await userData.findById(req.params._id);
        res.send(data)
    });
    route.patch('/addToCart/:_userId', userController.addToCart);
    route.patch('/addToWishlist/:_userId', userController.addToWishlist);


    return route;
}

export default userRouter;