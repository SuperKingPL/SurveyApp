import { Router } from "express";
import userRoute from "./userRoute";
import guildRoute from "./guildRoute";
import channelRoute from "./channelRoute";

const serverRouter = Router()

serverRouter.use("/user", userRoute)
serverRouter.use("/guild", guildRoute)
serverRouter.use("/channel", channelRoute)

serverRouter.get("/", (req, res) => {
    res.json({
        version: 1,
        status: "All system operational."
    })
})

export default serverRouter