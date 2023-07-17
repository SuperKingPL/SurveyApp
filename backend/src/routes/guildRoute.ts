import { Router } from "express";
import { Guild } from "../models/guild";
import { User, UserDocument } from "../models/user";
import { UserService } from "../services/UserService";
import { Channel } from "../models/channel";

const guildRoute = Router()

guildRoute.post("/create", async (req, res) => {
    const {name} = req.body;
    const auth = req.headers.authorization;
    const user: UserDocument | null = await User.findOne({token: auth})

    console.log(user);

    if (user != null) {

        const guild = await new Guild({
            name: name,
            channels: []
        }).save();

        const channel = await new Channel({
            name: "ogólny",
            emoji: "🌍",
            guild: guild._id
        }).save();

        await guild.updateOne({channels: [...guild.channels, channel._id]})

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