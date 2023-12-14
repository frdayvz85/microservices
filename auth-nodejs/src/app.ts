import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

const app: Application = express();




// ROUTES
import userRoutes from './modules/User/routes';
const swaggerDoc = require('./docs/swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Implement Cors
app.use(cors());
// app.use(
//   cors({
//     origin: ['http://localhost:3000/'],
//   })
// );

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// Testing Api 
app.get('/', (req: Request, res: Response) => {
    res.status(200).send('API is working!'); // this for the testing
});


// INITIALIZE ROUTES
app.use('/api/v1/users', userRoutes);


// If API doesn't exsist
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Endpoint Not found...');
    res.status(404);
    next(error);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});



export default app;