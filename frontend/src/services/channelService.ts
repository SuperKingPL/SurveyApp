import axios from "axios"
import { API_URL } from "../config"

export default class ChannelService {
    channel: string | null = null;

    constructor(channelID) {
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
}