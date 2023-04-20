import { createHash } from "crypto";

export const tokenizePassword = (p: string, id: string) => {
    return Buffer.from(id).toString("base64url") + '.' + createHash('sha256').update(p).digest('hex')
}