import Cookies from "universal-cookie";

export const getUserToken = (): string => {
    const cookies = new Cookies();
    return cookies.get("token")
}
export const convertTokenToID = (token: string): string => {
    return atob(token.split('.')[0])
}