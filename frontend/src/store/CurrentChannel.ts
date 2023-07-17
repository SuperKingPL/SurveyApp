import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from 'react'
import { GuildService, IGuild } from "../services/GuildService";

export interface CurrentChannelState {
    CurrentChannel: number,
}

const initialState: CurrentChannelState = {
    CurrentChannel: 0
};

const CurrentGuildSlice = createSlice({
    name: 'CurrentChannel',
    initialState,
    reducers: {
        SetCurrentChannel: (state, action) => {
            state.CurrentChannel = action.payload;
        }
    }
})

export const {SetCurrentChannel: SetCurrentChannel} = CurrentGuildSlice.actions;
export default CurrentGuildSlice.reducer;