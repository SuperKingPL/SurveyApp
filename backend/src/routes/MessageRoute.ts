import { Router } from "express";
import { Message } from "../models/message";

const messageRoute = Router();

messageRoute.get("/:msgID/fetch", async (req, res) => {
    const msgID = req.params.msgID;

    const msg = await Message.findById(msgID);
    if (msg != null) {
        res.json(msg);
    } else {
        res.sendStatus(404);
    }
});

export default messageRoute