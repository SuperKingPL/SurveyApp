import { API_URL } from "../config"
import { getUserToken } from "./authService"

export const sendMessage = async (server, channel, content: string) => {
    fetch(API_URL + `/channel/${server}/${channel}/send`, {
        method: 'POST',
        body: JSON.stringify({
            "content": content
        }),
        headers: new Headers({
            'Authorization': getUserToken(),
            "Content-Type": "application/json"
        }),
    })
}