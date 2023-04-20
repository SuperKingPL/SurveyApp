import { API_URL } from "../config";
import { getUserToken } from "./authService";

export const fetchUserById = (id: string, callback: (e: any) => any) => {
    fetch(API_URL + `/user/${id}/fetch`, {
        method: 'get',
        headers: new Headers({
            'Authorization': getUserToken()
        })
    }).then((res) => res.json().then((responseJson) => {
        callback(responseJson)
    }))
}