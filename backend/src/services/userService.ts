import { Document, Query } from "mongoose";
import { User, UserDocument } from "../models/user";
import { GuildDocument } from "../models/guild";
import { io } from "..";

export class UserService {

    userObject: UserDocument | null = null;

    constructor(UserObject: UserDocument) {
        this.userObject = UserObject;
    }
    async joinGuild(guild: GuildDocument) {
        await this.userObject?.updateOne({_id: this.userObject._id, guilds: [...this.userObject?.guilds, guild._id]});
        io.emit("UPDATE_GUILDS");
    }
}