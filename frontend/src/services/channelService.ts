import axios from "axios"
import { API_URL } from "../config"
import { getUserToken } from "./authService"

export const sendMessage = async (channel, content: string) => {
    axios.post(API_URL + `/channel/${channel}/send`, {
        "content": content
    });
}
export const getMessages = async (channelID: string) => {
    return await (await axios.get(API_URL + `/channel/${channelID}/messages`)).data
}