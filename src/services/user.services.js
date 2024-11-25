import userData from '../models/user.model.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getAll = async () => await userData.find();

export const login = async (body) => {
    const user = await userData.findOne({ email: body.email });
    if (user == null) {
        return 0;
    }
    const auth = await bcrypt.compare(body.password, user.password);
    if (!auth) return -1;
    const token = jwt.sign({ id: user.id, name: user.firstName }, process.env.SECURITY_KEY, { expiresIn: process.env.EXPIRY });

    return { user, token };
}

export const getUser = async (req) => { return await userData.findById(req.user.id); }

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

export const placeOrder = async (userId) => {
    const user = await userData.findById(userId);
    user.cart.items = [];
    user.cart.totalAmount = 0;
    user.save();
    return
}
export const addToWishlist = async (userId, reqData) => {
    const user = await userData.findById(userId);
    const item = reqData.bookId;

    const existingBook = user.wishlist.items.find(itemWishlist => itemWishlist.bookId == item);

    if (existingBook) user.wishlist.items.remove({ bookId: item });
    else user.wishlist.items.push({ bookId: item });

    await user.save();
    return;
}