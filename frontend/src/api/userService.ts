import { API_URL } from "../config";
import { getUserToken } from "./authService";

export const fetchUserById = async (id: string) => {
    const response = await fetch(API_URL + `/user/${id}/fetch`, {
        method: 'get',
        headers: new Headers({
            'Authorization': getUserToken(),
            // 'Content-Type': "application/json",
        })
    });
    return await response.json()
}