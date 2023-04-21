import { Router } from "express";
import userRoute from "./userRoute";
import guildRoute from "./guildRoute";

const serverRouter = Router()

serverRouter.use("/user", userRoute)
serverRouter.use("/guild", guildRoute)

serverRouter.get("/", (req, res) => {
    res.json({
        version: 1,
        status: "All system operational."
    })
})

export default serverRouter