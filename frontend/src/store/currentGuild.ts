import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from 'react'
import { GuildService, IGuild } from "../services/GuildService";

export interface CurrentGuildState {
    CurrentGuild: IGuild
}

const initialState: CurrentGuildState = {
    CurrentGuild: {
        _id: "0",
        name: "Unknown server."
    }
};

const CurrentGuildSlice = createSlice({
    name: 'CurrentGuild',
    initialState,
    reducers: {
        SetCurrentGuild: (state, action) => {
            state.CurrentGuild = action.payload;
        }
    }
})

export const {SetCurrentGuild: SetCurrentGuild} = CurrentGuildSlice.actions;
export default CurrentGuildSlice.reducer;