import { Document, Query } from "mongoose";
import { User, UserDocument } from "../models/user";
import { GuildDocument } from "../models/guild";
import { io } from "..";
import { Socket } from "socket.io";

export class UserService {

    UserObject: UserDocument;
    UserSocket: Socket;

    constructor(UserObject: UserDocument, UserSocket: Socket) {
        this.UserObject = UserObject;
        this.UserSocket = UserSocket;
    }
    async JoinGuild(guild: GuildDocument) {
        await this.UserObject?.updateOne({_id: this.UserObject._id, guilds: [...this.UserObject?.guilds, guild._id]});
        this.UserSocket?.join("G-" + guild._id)
        io.emit("UPDATE_GUILD_LIST");
        console.log(this.UserSocket.rooms);
    }
}