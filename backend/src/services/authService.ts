import { createHash } from "crypto";
import { User } from "../models/user";
import { Response } from "express";

export const tokenizePassword = (p: string, id: string) => {
    return Buffer.from(id).toString("base64url") + '.' + createHash('sha256').update(p).digest('hex')
}
export const getIDByToken = (token: string | undefined) => {
    if (token == undefined) return
    return atob(token.split('.')[0])
}
export const Authorize = async (token: string | undefined, id: string) => {
    const u = await User.findOne({_id: id})
    if (u?.token == token) {return true}
    return false;
}