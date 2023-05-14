import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from 'react'
import { GuildService, IGuild } from "../services/GuildService";

export interface currentGuildState {
    activeGuild: IGuild
}

const initialState: currentGuildState = {
    activeGuild: {
        _id: "0",
        name: "Unknown server."
    }
};

const currentGuildSlice = createSlice({
    name: 'currentGuild',
    initialState,
    reducers: {
        setActiveGuild: (state, action) => {
            state.activeGuild = action.payload;
        }
    }
})

export const {setActiveGuild} = currentGuildSlice.actions;
export default currentGuildSlice.reducer;