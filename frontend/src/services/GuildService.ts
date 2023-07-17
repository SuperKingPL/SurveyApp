import axios from "axios"
import { API_URL } from "../config"
import { socket } from "../scripts/socket";

export interface IGuild {
    _id: string,
    name: string,
    channels?: string[]
}
export class GuildService {

    Guild: string | null = null;

    constructor(guildID) {
        this.Guild = guildID;
    }
    static CreateGuild = async (GuildName) => {
        return new Promise((resolve) => {
            socket.emit("CREATE_GUILD", GuildName, (e) => {
                resolve(e);
            });
        })
        
        // return await(await axios.post(API_URL + "/guild/create", {
        //     name: GuildName
        // })).data;
    }
    async Fetch() {
        return await(await axios.get(API_URL + `/guild/${this.Guild}/fetch`)).data;
    }
}
