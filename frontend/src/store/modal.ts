import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from 'react'

export interface ModalState {
    isOpen: boolean,
    modalContent: ReactNode | ReactNode[],
}

const initialState: ModalState = {
    isOpen: false,
    modalContent: null
};

const ModalSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        OpenModal: (state, action) => {
            state.isOpen = true;
            state.modalContent = action.payload;
        },
        CloseModal: (state) => {
            state.isOpen = false;
        }
    }
})

export const {OpenModal, CloseModal} = ModalSlice.actions;
export default ModalSlice.reducer;