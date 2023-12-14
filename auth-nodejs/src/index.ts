import dotenv from 'dotenv';
import DB from './config/db';
import app from './app';
dotenv.config();

const port = process.env.PORT || 5000;

DB().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}...`);
    });
});