import mongoose, { Schema } from "mongoose";

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
        items: { type: [{ bookId: { type: mongoose.Schema.Types.ObjectId, unique: true }, quantity: { type: Number, default: 0 } }], default: [] }, totalAmount: { type: Number, default: 0 },
        _id: false
    }, wishlist: {
        items: {
            type: [{
                bookId: { type: mongoose.Schema.Types.ObjectId, unique: true }
            }]
        }
    }
})

export default mongoose.model('userData', user);