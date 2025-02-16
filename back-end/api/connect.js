import {MongoClient} from "mongodb";

const URI = "mongodb+srv://dbCaioba:dbCaiobaPassword@cluster0.c69z4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

