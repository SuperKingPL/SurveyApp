import { Router } from "express";
import userRoute from "./userRoute";

const serverRouter = Router()

serverRouter.use("/user", userRoute)

serverRouter.get("/", (req, res) => {
    res.json({
        version: 1,
        status: "All system operational."
    })
})

export default serverRouter