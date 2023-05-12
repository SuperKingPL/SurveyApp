import { Document, model, Schema } from 'mongoose'
import { GenerateDiscriminator, GenerateSnowflake } from "../services/snowflakeService";
import { Guild } from './guild';

export interface UserDocument extends Document {
    _id: string
    token?: string
    email: string
    username: string
    discriminator: number
    avatarUrl: string
    bot: boolean,
    guilds: string[]
}

const userSchema = new Schema({
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
        type: Number,
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
    guilds: {},
    joinGuild: Number
}, {
    methods: {
        async joinGuild(guildID) {
            const guild = await(await Guild.findOne({_id: guildID}));
            if (guild != null) {
                this.updateOne({guilds: [...this.guilds, guild.id]})
                return 200
            } else {
                return 404
            }
        }
    }
});

export const User = model<UserDocument>('user', userSchema, "users")