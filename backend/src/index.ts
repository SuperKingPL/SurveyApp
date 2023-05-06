import express, { Express, Request, Response } from "express";
import mongoose, { Mongoose } from "mongoose";
import { User } from "./models/user";
import serverRouter from "./routes/server";
import { createServer } from "http";
import { Server } from "socket.io";

const app: Express = express();
const server = createServer(app);
export const io = new Server(app.listen(4000, () => { console.log("Server started on port 4000...") }), {cors: {origin: "*"}});

io.on("connection", (socket) => {
    console.log("Połączono z socketem.")
})

console.log("Runned socket server.")

const database = mongoose.connect("mongodb://127.0.0.1:27017/SurveyDB").then((e) => {
    console.log("Connected to DB.")

    app.use(express.json())
    app.use("/api/v1/", serverRouter)

    app.get("/", async (req: Request, res: Response) => {
        const user = new User({
            email: "xatel@upo.up",
            username: "XeNoNeNiAs",
            discriminator: "0000",
            bot: true
        });
        user.save()
        res.send("Zapisano")
    })
})