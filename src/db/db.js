import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_Name}`).then(() => {
            console.log('====================================');
            console.log('db connected...');
        });
    } catch (error) {
        console.log(error);
    }
} 



