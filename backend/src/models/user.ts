import {Document, model, Schema} from 'mongoose'
import { GenerateDiscriminator, GenerateSnowflake } from "../services/snowflakeService";

export interface UserDocument extends Document {
    _id: string
    token: string
    email: string
    username: string
    discriminator: number
    bot: boolean
}

export const User = model<UserDocument>('user', new Schema({
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
        unique: true,
        dropDups: true,
        uniqueCaseSensitive: true,
    },
    username: {
        type: String
    },
    discriminator: {
        type: Number,
        default: GenerateDiscriminator
    },
    bot: {
        type: Boolean,
        default: false
    }
}), "users")