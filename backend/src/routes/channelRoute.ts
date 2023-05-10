import { Router } from "express";
import { io } from "..";
import { getIDByToken } from "../services/authService";
import { GenerateSnowflake } from "../services/snowflakeService";
import { Message } from "../models/message";

const channelRoute = Router()

channelRoute.get("/:serverId/:channelId/", async (req, res) => {
    
});

channelRoute.post("/:serverId/:channelId/send", (req, res) => {
    console.log("Request getted.")
    const {content} = req.body;
    const author = getIDByToken(req.headers.authorization);

    console.log(content)

    const msg = new Message({
        content: content,
        author: author,
        sendTimestamp: Date.now()
    });

    msg.save();
    
    io.emit("sendMessage", msg._id);

    res.send("ok")
})

export default channelRoute