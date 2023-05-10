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

const modalSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.modalContent = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;