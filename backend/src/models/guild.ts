import { Schema, model } from "mongoose";
import { GenerateSnowflake } from "../services/snowflakeService";
import { ChannelDocument } from "../models/channel";

export interface GuildDocument extends Document {
    _id: string,
    name: string,
    channels: string[]
}

export const guild = model<GuildDocument>('guild', new Schema({
    _id: {
        default: GenerateSnowflake,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    channels: {}
}), "guilds")