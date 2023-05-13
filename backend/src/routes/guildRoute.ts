import { Router } from "express";
import { Guild } from "../models/guild";
import { User, UserDocument } from "../models/user";
import { UserService } from "../services/userService";

const guildRoute = Router()

guildRoute.post("/create", async (req, res) => {
    const {name} = req.body;
    const auth = req.headers.authorization;
    const user: UserDocument | null = await User.findOne({token: auth})

    console.log(user);

    if (user != null) {
        const guild = await new Guild({
            name: name
        }).save();
        
        await new UserService(user).joinGuild(guild);

        res.json({
            success: true,
            id: guild._id
        });
    } else {
        res.sendStatus(404);
    }
});

guildRoute.get("/:guild/fetch", async (req, res) => {
    res.json(await Guild.findById(req.params.guild));
});

export default guildRoute