import axios from "axios"
import { API_URL } from "../config"

export class GuildService {
    public static createServer = async (serverName) => {
        await axios.post(API_URL + "/guild/create", {
            name: serverName
        });
    }
}