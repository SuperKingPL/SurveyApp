import axios from "axios"
import { API_URL } from "../config"

export interface IChannel {
    _id: number,
    guild: number,
    name: string,
    emoji: string
}

export default class ChannelService {
    channel: string | null = null;

    constructor(channelID: string) {
        this.channel = channelID;
    }
    SendMessage(content: string) {
        axios.post(API_URL + `/channel/${this.channel}/send`, {
            "content": content
        });
    }
    async GetMessages() {
        return await(await axios.get(API_URL + `/channel/${this.channel}/messages`)).data;
    }
    async Fetch() {
        return await(await axios.get<IChannel>(API_URL + `/channel/${this.channel}/fetch`)).data
        
    }
}