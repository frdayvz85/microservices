import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors"
import proxy from "express-http-proxy"

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

const nodeApiUrl: string = process.env.NODE_API_URL || ""
const fastApiUrl: string = process.env.FAST_API_URL || ""

app.use(cors())

app.use('/auth', proxy(nodeApiUrl));
app.use('/education', proxy(fastApiUrl));

app.get("/", (req: Request, res: Response) => {
    res.send("Apigateway is working...");
});


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});