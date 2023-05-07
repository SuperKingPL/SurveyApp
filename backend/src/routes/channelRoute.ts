import { Router } from "express";
import { io } from "..";
import { getIDByToken } from "../services/authService";

const channelRoute = Router()

channelRoute.post("/:serverId/:channelId/send", (req, res) => {
    console.log("Request getted.")
    const {content} = req.body;
    const author = getIDByToken(req.headers.authorization);

    // io.to(`${req.params.serverId}/${req.params.channelId}`).emit("sendMessage", {
    //     "content": content
    // })
    io.emit("sendMessage", {
        "content": content,
        "author": author
    })

    res.send("ok")
})

export default channelRoute