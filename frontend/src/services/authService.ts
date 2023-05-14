import axios from "axios";
import Cookies from "universal-cookie";
import { API_URL } from "../config";

export default class AuthService {
    static GetToken() {
        return new Cookies().get("token");
    }
    static ConvertTokenToID(token: string) {
        return atob(token.split('.')[0]);
    }
    static async AuthorizeUser(email, password) {
        return await(await axios.post(API_URL + "/auth", {email: email, password: password})).data;
    }
    static GetUserID() {
        if (this.GetToken() != undefined) {
            return this.ConvertTokenToID(this.GetToken());
        } else {
            return null;
        }   
    }
}