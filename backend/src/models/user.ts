import {Document, model, Schema} from 'mongoose'
import { GenerateSnowflake } from "../services/snowflakeService";

export interface UserDocument extends Document {
    _id: string
    email: string
    username: string
    discriminator: string
    bot: boolean
}

export const User = model<UserDocument>('user', new Schema({
    _id: {
        type: String,
        default: GenerateSnowflake
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
        type: String
    },
    bot: {
        type: Boolean,
        default: false
    }
}), "users")