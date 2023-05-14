import { Router } from "express";
import { io } from "..";
import { getIDByToken } from "../services/authService";
import { Message } from "../models/message";
import { Channel } from "../models/channel";

const channelRoute = Router()

channelRoute.get("/:channelID/messages", async (req, res) => {
    const channelID = req.params.channelID;
    res.json(await Message.find({channel: channelID}));
});

channelRoute.post("/:channelID/send", (req, res) => {
    const {content} = req.body;
    const channelID = req.params.channelID;
    const author = getIDByToken(req.headers.authorization);

    console.log(content)

    const msg = new Message({
        content: content,
        author: author,
        sendTimestamp: Date.now(),
        channel: channelID
    });

    msg.save();
    
    io.emit("sendMessage", msg._id);

    res.send("ok")
});

channelRoute.get("/:channelID/fetch", async (req, res) => {
    return await Channel.findById(req.params.channelID)
});

export default channelRoute