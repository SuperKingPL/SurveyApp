import axios from "axios";
import { API_URL } from "../config";

export const fetchMessageByID = async (messageID) => {
    return await(await axios.get(API_URL + `/message/${messageID}/fetch`)).data
}