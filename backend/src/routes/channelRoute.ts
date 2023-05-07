import { Router } from "express";
import { io } from "..";
import { getIDByToken } from "../services/authService";
import { GenerateSnowflake } from "../services/snowflakeService";

const channelRoute = Router()

channelRoute.get("/:serverId/:channelId/", async (req, res) => {
    
});

channelRoute.post("/:serverId/:channelId/send", (req, res) => {
    console.log("Request getted.")
    const {content} = req.body;
    const author = getIDByToken(req.headers.authorization);

    console.log(content)

    io.emit("sendMessage", {
        "id": GenerateSnowflake,
        "content": content,
        "author": author
    })

    res.send("ok")
})

export default channelRoute