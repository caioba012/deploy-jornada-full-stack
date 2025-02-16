import express, { request, response } from "express";
import cors from "cors";
import { db } from "../api/connect.js";

const app = express();
const PORT = 3001;

app.use(cors({
    origin: 'http://localhost:5173', // Permitir apenas o frontend local
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.get("/", (request, response) => {
    response.send("Hello World!");
});

app.get("/artists", async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
    console.log(`Servidor está escutando a porta ${PORT}`);
});