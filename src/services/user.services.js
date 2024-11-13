import userData from '../models/user.model.js';


export const getAll = async () => await userData.find();

export const findUser = async (reqData) => userData.findOne({ email: reqData.email });

export const addToCart = async (userId, reqData) => {
    const user = await userData.findById(userId);
    const item = reqData;

    user.cart.items.push(item);
    user.cart.totalAmount += item.quantity * item.discountedPrice;
    await user.save();
}