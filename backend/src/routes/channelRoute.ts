import { Router } from "express";
import { io } from "..";
import { getIDByToken } from "../services/AuthService";
import { Message } from "../models/message";
import { Channel } from "../models/channel";

const channelRoute = Router()

channelRoute.get("/:channelID/messages", async (req, res) => {
    const channelID = req.params.channelID;
    res.json(await Message.find({channel: channelID}));
});

channelRoute.post("/:channelID/send", async (req, res) => {
    
    const {content} = req.body;
    const channel = await Channel.findById(req.params.channelID);
    const author = getIDByToken(req.headers.authorization);

    console.log(content)

    const msg = new Message({
        content: content,
        author: author,
        sendTimestamp: Date.now(),
        channel: channel?._id
    });

    msg.save();
    
    io.sockets.to(`G-${channel?.guild}`).emit("SEND_MESSAGE", {
        id: msg._id,
        guild: channel?.guild,
        channel: msg.channel
    });

    res.send("ok")
});

channelRoute.get("/:channelID/fetch", async (req, res) => {
    console.log(await Channel.findById(req.params.channelID))
    res.json(await Channel.findById(req.params.channelID));
});

export default channelRoute