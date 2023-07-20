import { createSlice } from "@reduxjs/toolkit";
import ContextMenuItem from "../components/ContextMenuItem";

export interface ContextMenuState {
    x: number,
    y: number,
    shown: boolean,
    menuItems: JSX.Element[]
}

const initialState: ContextMenuState = {
    x: 0,
    y: 0,
    shown: false,
    menuItems: [
        <ContextMenuItem name="Nothing" key={-1}/>
    ]
}

const ContextMenuSlice = createSlice({
    name: 'ContextMenu',
    initialState,
    reducers: {
        ShowContextMenu: (state, action) => {
            state.shown = true;            
            state.x = action.payload["x"];
            state.y = action.payload["y"];
            state.menuItems = action.payload["menuItems"];
        },
        CloseContextMenu: (state) => {
            state.shown = false;
        }
    }
});

export const {ShowContextMenu, CloseContextMenu} = ContextMenuSlice.actions;
export default ContextMenuSlice.reducer;