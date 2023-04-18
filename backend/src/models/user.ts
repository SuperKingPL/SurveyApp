import {Document, model, Schema} from 'mongoose'
import { GenerateSnowflake } from "../services/snowflakeService";

export interface UserDocument extends Document {
    _id: string | never;
    id: string;

}

export const User = model<UserDocument>('user', new Schema({
    _id: {
        type: String,
        default: GenerateSnowflake
    },
    email: {
        type: String,
        unique: [true, "Email is already in use."],
        dropDups: true,
        uniqueCaseSensitive: true,
    }
}))