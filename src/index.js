import express, { json } from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';
import { connectDb } from './db/db.js';
import swaggerUi from 'swagger-ui-express';
import jsonDoc from './swagger/swaagger.json' assert { type: 'json' };

dotenv.config({
    path: './.env'
});

const app = express();

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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(jsonDoc));
app.use(json());
app.use(`/api/${process.env.API_VERSION}`, router());
