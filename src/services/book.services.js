import bookModel from "../models/book.model.js";

export const getAllBooks = async () => {
    const data = await bookModel.find();
    return data;
}

export const createBook = async (body) => {
    const data = await bookModel({
        title: body.title,
        author: body.author,
        description: body.description,
        price: body.price,
        img: body.img,
        discountedPrice: body.discountedPrice
    });



    return data;

}