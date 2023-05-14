import axios from "axios"
import { API_URL } from "../config"

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
    static CreateServer = async (serverName) => {
        return await(await axios.post(API_URL + "/guild/create", {
            name: serverName
        })).data;
    }
    async Fetch() {
        return await(await axios.get(API_URL + `/guild/${this.Guild}/fetch`)).data;
    }
}
