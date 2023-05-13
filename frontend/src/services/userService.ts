import axios from "axios";
import { API_URL } from "../config";
import AuthService from "./AuthService";
import { GuildService } from "./GuildService";

export default class UserService {
    UserID: string | null = null;

    constructor(id: string) {
        this.UserID = id;
    }

    async Fetch() {
        return await(await axios.get(API_URL + `/user/${this.UserID}/fetch`)).data;
    }
    async GetUserGuilds() {
        const guildsID = await(await this.Fetch()).guilds;
        var guilds = [];

        for (const guildID in guildsID) {
            const guild = await new GuildService(guildsID[guildID]).Fetch();
            guilds.push(guild);
        }
        return guilds;
    }
}

export const Self = new UserService(AuthService.GetUserID());