import { Schema, model } from "mongoose";
import { GenerateSnowflake } from "../services/SnowflakeService";

export interface ChannelDocument extends Document {
    _id: string,
    guild: number,
    name: string,
    emoji: string,
}

export const Channel = model<ChannelDocument>('channel', new Schema({
    _id: {
        type: String,
        default: GenerateSnowflake
    },
    guild: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    emoji: {
        type: String
    }
}), "channels");