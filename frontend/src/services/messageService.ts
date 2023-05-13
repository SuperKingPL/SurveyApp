import axios from "axios";
import { API_URL } from "../config";

export default class MessageService {

    message: string | null = null;

    constructor(messageID: string) {
        this.message = messageID;
    }
    async Fetch() {
        return await(await axios.get(API_URL + `/message/${this.message}/fetch`)).data;
    }
}