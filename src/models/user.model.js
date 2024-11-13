import mongoose, { Schema } from "mongoose";

const user = new mongoose.Schema({
    name: {
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
        items: [
            {
                title: {
                    type: String,
                    require: true
                },
                img: {
                    type: String,
                    require: true
                },
                author: {
                    type: String,
                    require: true
                },
                description: String,
                price: {
                    type: Number,
                    require: true
                },
                quantity : Number,
                discountedPrice: Number
            }
        ],
        totalAmount: {
            type: Number,
            default: 0
        }
    }
})

export default mongoose.model('userData', user);