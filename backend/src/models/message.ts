import { Document, model, Schema } from 'mongoose'
import { GenerateSnowflake } from '../services/SnowflakeService'

export interface MessageDocument extends Document {
    _id: string
    content: string,
    author: string,
    sendTimestamp: number,
    channel: string
}

export const Message = model<MessageDocument>('message', new Schema({
    _id: {
        type: String,
        default: GenerateSnowflake
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    sendTimestamp: {
        type: Number,
        required: true
    },
    channel: {
        type: String,
        required: true
    }
}), "messages")