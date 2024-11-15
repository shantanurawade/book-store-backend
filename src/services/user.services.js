import userData from '../models/user.model.js';
import bcrypt from 'bcrypt'


export const getAll = async () => await userData.find();

export const login = async (body) => {
    const user = await userData.findOne({ email: body.email });

    const auth = await bcrypt.compare(body.password, user.password);

    if (auth) return { user };

    return 0;
}

export const findUser = async (reqData) => userData.findOne({ email: reqData.email });

export const addToCart = async (userId, reqData) => {
    const user = await userData.findById(userId);
    const item = reqData.bookId;
    const existingBook = user.cart.items.find(itemcart => itemcart.bookId == item)

    if (existingBook) existingBook.quantity += 1;
    else user.cart.items.push({ bookId: item, quantity: 1 });
    user.cart.totalAmount += 1 * reqData.price;

    await user.save();
    return;
}
export const addToWishlist = async (userId, reqData) => {
    const user = await userData.findById(userId);
    const item = reqData.bookId;


    user.wishlist.items.push({ bookId: item });

    await user.save();
    return;
}