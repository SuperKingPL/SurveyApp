import axios from "axios";
import { API_URL } from "../config";
import { getUserToken } from "./authService";

export const fetchUserByID = async (id: string) => {
    return await(await axios.get(API_URL + `/user/${id}/fetch`)).data;
}