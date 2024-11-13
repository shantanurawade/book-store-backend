import express, { Router } from 'express';
import * as userController from '../controller/user.controller.js';
import userData from '../models/user.model.js'
const route = express.Router();


const userRouter = () => {
    route.get('/get', userController.getAllUser);
    route.post('/register', userController.registerUser);
    route.patch('/addToCart/:_userId', userController.addToCart);
    route.get('/get/:_id', async (req, res) => {
        const data = await userData.findById(req.params._id);
        res.send(data)
    });

    return route;
}

export default userRouter;