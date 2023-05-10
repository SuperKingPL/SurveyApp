import axios from "axios"
import { API_URL } from "../config"
import { getUserToken } from "./authService"

export const sendMessage = async (server, channel, content: string) => {
    
    axios.post(API_URL + `/channel/${server}/${channel}/send`, {
        "content": content
    });
}