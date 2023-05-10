import { Document, model, Schema } from 'mongoose'
import { GenerateSnowflake } from '../services/snowflakeService'

export interface MessageDocument extends Document {
    _id: string
    content: string,
    author: string,
    sendTimestamp: Date
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
        type: Date,
        required: true
    }
}), "messages")