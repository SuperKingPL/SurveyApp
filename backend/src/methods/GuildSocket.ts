import { Server, Socket } from "socket.io";
import { User, UserDocument } from "../models/user";
import { Guild } from "../models/guild";
import { Channel } from "../models/channel";
import { UserService } from "../services/UserService";

export default (io: Socket) => {
    io.on("GET_SOCKET_GROUPS", async(res) => {
        console.log(io.rooms);
        res(Array.from(io.rooms));
    })
    io.on("CREATE_GUILD", async (name, res) => {
        const user: UserDocument | null = await User.findOne({token: io.handshake.auth.token});

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

            await new UserService(user, io).JoinGuild(guild);

            res({
                success: true,
                id: guild._id
            });
        } else {
            res.sendStatus(404);
        }
    });
}