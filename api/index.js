import express from "express";
import { client } from "./db.js";

const app = express();
app.use(express.static("public"));

app.use((req, _res, next) => {
    if(req.url === "/api/getdata") {
        console.log("Logged in!");
        next();
    }
});

app.get("/api/getdata", async (_req, res) => {
    res.send((await client.query("SELECT * FROM planet")).rows);
});

app.listen(3000, () => console.log("Server is running!"));