import { Router } from "express";
import { Authorize, getIDByToken } from "../services/authService";
import { Guild } from "../models/guild";
import { User } from "../models/user";

const guildRoute = Router()

guildRoute.post("/create", async (req, res) => {
    const {name} = req.body;
    const auth = req.headers.authorization;
    const user = User.findOne({token: auth})

    if (user != null) {
        await new Guild({
            name: name
        }).save();
        await user.joinGuild()
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});

export default guildRoute