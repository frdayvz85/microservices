import dotenv from 'dotenv';
import { IEnvironment } from '../types/environment';
dotenv.config();

const environment: IEnvironment = {
    port: process.env.PORT,
    database: {
        port: parseInt(process.env.DB_PORT || '3306', 10),
        name: process.env.DB_NAME || '',
        host: process.env.DB_HOST || '',
        user: process.env.DB_USER || '',
        password: process.env.DB_PASSWORD || '',
    },
    mongoDB: {
        url: process.env.DATABASE_URL || '',
    },
    accessToken: process.env.ACCESS_TOKEN_PRIVATE_KEY || '',
    refreshToken: process.env.REFRESH_TOKEN_PRIVATE_KEY || '',
    parentEmail: process.env.PARENT_EMAIL || '',
    parentPassword: process.env.PARENT_PASSWORD || '',
    clientURL: process.env.CLIENT_URL || '',
};

export default environment;