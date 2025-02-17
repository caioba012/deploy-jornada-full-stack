import express, { request, response } from "express";
import cors from "cors";
import { db } from "../api/connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/", (request, response) => {
    response.send("Hello World!");
});

app.get("/api/artists", async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async (request, response) => {
    response.sendfile(path.join(__dirname, "../front-end/dist/index.html"));
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando a porta ${PORT}`);
});