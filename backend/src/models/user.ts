import { Document, Model, model, Schema } from 'mongoose'
import { GenerateDiscriminator, GenerateSnowflake } from "../services/SnowflakeService";
import { Guild } from './guild';

export interface UserDocument extends Document {
    _id: string
    token?: string
    email: string
    username: string
    discriminator: string
    avatarUrl: string
    bot: boolean,
    guilds: string[]
}

export const UserSchema = new Schema({
    _id: {
        type: String,
        default: GenerateSnowflake
    },
    token: {
        type: String,
        unique: true,
        uniqueCaseSensitive: true
    },
    email: {
        type: String,
    },
    username: {
        type: String
    },
    discriminator: {
        type: String,
        default: GenerateDiscriminator
    },
    avatarUrl: {
        type: String,
        default: "https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3"
    },
    bot: {
        type: Boolean,
        default: false
    },
    guilds: {
        type: Array<String>,
        default: []
    },
});

export const User = model<UserDocument>('user', UserSchema, "users")