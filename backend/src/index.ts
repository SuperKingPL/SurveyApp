import express, { Express, Request, Response } from "express";
import mongoose, { Mongoose } from "mongoose";
import { User } from "./models/user";
import serverRouter from "./routes/Server";
import { createServer } from "http";
import { Server } from "socket.io";
import { Channel } from "./models/channel"; 
import GuildSocket from "./methods/GuildSocket";
import { instrument } from "@socket.io/admin-ui";
import { UserService } from "./services/UserService";
import cors from "cors";

const app: Express = express(); 
const server = createServer(app);
export const io = new Server(
    app.listen(2115, "127.0.0.1",
    () => { console.log("Server started on port 4000...") }),
    {cors:
        {
            origin: '*',
            credentials: true
        }
    });

instrument(io, {auth: false});

io.on("connection", async (socket) => {
    console.log("Client has connected to Socket Server.");

    const token = socket.handshake.auth.token;
    const user = await(await User.findOne({token: token}))
    if (user == null) {throw new Error("Socket is invalid.")}
    user.guilds.forEach(guild => {
        socket.join('G-' + guild);
    });

    // ! SOCKET GROUPS
    GuildSocket(socket);

});
io.use((socket, next) => {
    next();
});
io.of("/").adapter.on("join-room", async (room, id) => {
    const socket = io.sockets.sockets.get(id);
    const token = socket?.handshake.auth.token;
    const user = await (await User.findOne({token: token}));
    if (user == null || socket == undefined) {throw new Error("Token and socket cannot be null.") }
    new UserService(user, socket)
});
app.use(function(req, res, next) {
    res.setHeader('charset', 'utf-8');
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

console.log("Socket server is running.")

const database = mongoose.connect("mongodb://127.0.0.1:27017/SurveyDB").then((e) => {
    console.log("Connected to database.");

    app.use(express.json());
    app.use("/api/v1/", serverRouter);
});