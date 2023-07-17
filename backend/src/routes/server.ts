import { Router } from "express";
import userRoute from "./UserRoute";
import guildRoute from "./GuildRoute";
import channelRoute from "./ChannelRoute";
import messageRoute from "./MessageRoute"
import authRoute from "./AuthRoute";

const serverRouter = Router()

serverRouter.use("/user", userRoute)
serverRouter.use("/guild", guildRoute)
serverRouter.use("/channel", channelRoute)
serverRouter.use("/message", messageRoute)
serverRouter.use("/auth", authRoute)

serverRouter.get("/", (req, res) => {
    res.json({
        version: 1,
        status: "All system operational."
    })
})

export default serverRouter