import * as bookServices from '../services/book.services.js'

export const getBooks = async (req, res) => {
    const data = await bookServices.getAllBooks();
    res.send({
        message: "this is list of all books...",
        data
    });
}

export const createBook = async (req, res) => {
    const body = req.body;

    const data = await bookServices.createBook(body);
    res.send({
        message: "book created successfully...",
        data
    });
} 