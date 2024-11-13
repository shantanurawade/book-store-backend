import express from 'express';
import * as bookController from '../controller/book.controller.js'
const route = express.Router();


const bookRoute = () => {
    route.get('/get', bookController.getBooks);
    route.post('/create-book', bookController.createBook)
    return route;
}

export default bookRoute;