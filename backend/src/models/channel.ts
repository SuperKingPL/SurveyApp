import { Schema, model } from "mongoose";
import { GenerateSnowflake } from "../services/snowflakeService";

export interface ChannelDocument extends Document {
    _id: string,
    name: string,
    emoji: string,
}

export const channel = model<ChannelDocument>('channel', new Schema({
    _id: {
        type: String,
        default: GenerateSnowflake
    },
    name: {
        type: String,
        required: true
    },
    emoji: {
        type: String
    }
}), "channels");