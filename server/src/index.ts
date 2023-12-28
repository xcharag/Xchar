import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AnnounceModel from "./models/Announcements";

const app = express();
const PORT = 5000;

// Configuración de Db con dotenv
dotenv.config();
//const db = await mongoose.connect("mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB}");

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.get("/", (req: Request, res: Response) => {

});

mongoose.connect(
    "mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB}"
    ).then(()=>{
    console.log("Conectado a la base de datos");
    app.listen(PORT);
});