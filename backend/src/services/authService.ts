import { createHash } from "crypto";

export const tokenizePassword = (p: string, id: string) => {
    return Buffer.from(id).toString("base64url") + '.' + createHash('sha256').update(p).digest('hex')
}
export const getIDByToken = (token: string | undefined) => {
    if (token == undefined) return
    return atob(token.split('.')[0])
}
export const Authorize = (token: string | undefined) => {
    if (token == undefined) return false
    return true
}