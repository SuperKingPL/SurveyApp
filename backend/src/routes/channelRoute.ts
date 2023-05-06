import { Router } from "express";
import { io } from "..";

const channelRoute = Router()

channelRoute.post("/:serverId/:channelId/send", (req, res) => {
    console.log("Request getted.")
    const {content} = req.body;

    // io.to(`${req.params.serverId}/${req.params.channelId}`).emit("sendMessage", {
    //     "content": content
    // })
    io.emit("sendMessage", {
        "content": content
    })

    res.send("ok")
})

export default channelRoute