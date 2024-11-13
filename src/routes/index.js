import express from 'express';
import bookRoute from './book.route.js';
import userRouter from './user.route.js';


const route = express.Router();

const router = () => {

    route.get('/get', (req, res) => {
        res.send("This is book store app...");
    });
    route.use('/book', bookRoute());
    route.use('/user', userRouter());

    return route;
}


export default router;