import { createHash } from "crypto";

export const tokenizePassword = (p: string) => {
    return createHash('sha256').update(p).digest('hex')
}