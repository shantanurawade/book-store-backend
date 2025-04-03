import bookModel from "../models/book.model.js";

export const getAllBooks = async () => {
    const data = await bookModel.find();
    return data;
}
export const getBookById = async (bookId) => {
    const data = await bookModel.findOne({_id: bookId});
    return data;
}

export const createBook = async (body) => {
    const data = await bookModel.create({
        title: body.title,
        author: body.author,
        description: body.description,
        price: body.price,
        img: body.img,
        discountedPrice: body.discountedPrice
    });



    return data;

}
