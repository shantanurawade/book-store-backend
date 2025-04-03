import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://rawadeshantanu:Pass%40123@cluster0.i1ora.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
            console.log('====================================');
            console.log('db connected...');
        });
    } catch (error) {
        console.log(error);
    }
} 



