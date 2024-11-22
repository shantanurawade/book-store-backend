import mongoose from "mongoose";

const user = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }, cart: {
        items: { type: [{ bookId: { type: mongoose.Schema.Types.ObjectId, unique: true }, _id: false, quantity: { type: Number, default: 0 } }], default: [] }, totalAmount: { type: Number, default: 0 },

    }, wishlist: {
        items: {
            type: [{
                bookId: { type: mongoose.Schema.Types.ObjectId, unique: true }, _id: false
            }]
        }
    }
})

export default mongoose.model('userData', user);