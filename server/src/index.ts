import express, {Request,Response} from "express";
const app = express();

app.get("/hello", (req: Request, res:Response) => {
    res.send("Hello World!");
    });

app.get("/", (req: Request, res:Response) => {
    
});

app.listen(5000);