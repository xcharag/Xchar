import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import AnnounceModel from "./models/Announcements";

const app = express();
const PORT = 5000;
app.use(express.json());

// Configuración de Db con dotenv
dotenv.config();
//const db = await mongoose.connect("mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB}");

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.get("/", (req: Request, res: Response) => {

});

app.post("/announce", async (req: Request, res: Response) => {
    const newannounce = new AnnounceModel({
        title: req.body.title,
        description: req.body.description,
        startingdate: new Date(),
    });
   const createdannounce = await newannounce.save();
   res.json(createdannounce);
});


const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const db = process.env.DB_HOST;
const connection = `mongodb+srv://${user}:${password}@${db}/?retryWrites=true&w=majority`;


mongoose.connect(
    connection,
    ).then(()=>{
    console.log("Conectado a la base de datos");
    app.listen(PORT);
});