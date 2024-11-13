import express, { json } from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';
import { connectDb } from './db/db.js';

const app = express();
dotenv.config({
    path: './.env'
});

connectDb().then(() => {

    try {
        app.listen(process.env.PORT, (req, res) => {
            console.log("Application is listening to - ", process.env.PORT);
            console.log('====================================');
        })
    }
    catch (eroor) {
        console.log('error while connecting to port...');
    }
});

app.use(json());
app.use(`/api/${process.env.API_VERSION}`, router());
