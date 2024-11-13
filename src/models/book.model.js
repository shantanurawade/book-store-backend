import mongoose from 'mongoose';


const bookSchema = new mongoose.Schema({
    
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
    discountedPrice: Number
}, {
    timestamps: true
});

export default mongoose.model('book', bookSchema);
