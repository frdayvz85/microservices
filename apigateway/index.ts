import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import cors from "cors"
import proxy from "express-http-proxy"
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

const nodeApiUrl: string = process.env.NODE_API_URL || ""
const fastApiUrl: string = process.env.FAST_API_URL || ""

process.on('uncaughtException', function (err) {
    console.log(err);
});

app.use(cors());
app.use(morgan('tiny'));

// Proxy routes
const proxyMiddleware = createProxyMiddleware({
    target: 'http://127.0.0.1:8000',
    changeOrigin: true,
    pathRewrite: {
        '^/education': '', // Remove the '/education' prefix
    },
});

app.use('/education', proxyMiddleware);
app.use('/auth', proxy(nodeApiUrl));
// app.use('/education', proxy(fastApiUrl));
// app.use('/education', proxy('http://127.0.0.1:8000'));
// app.use('/education', proxy('http://localhost:8000'));

// app.use('/education', proxy('http://127.0.0.1:8000', { proxyReqOptDecorator: requestTransformer }));

app.get("/", (req: Request, res: Response) => {
    res.send("Apigateway is working...");
});


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

// throw new Error('An error occurred');