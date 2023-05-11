import axios from "axios";
import Cookies from "universal-cookie";
import { API_URL } from "../config";

export const getUserToken = (): string => {
    const cookies = new Cookies();
    return cookies.get("token")
}
export const convertTokenToID = (token: string): string => {
    return atob(token.split('.')[0])
}
export const authenticateUser = async (email, password) => {
    const req = await axios.post(API_URL + "/auth", {
        email: email,
        password: password
    });
    return req.data;
}