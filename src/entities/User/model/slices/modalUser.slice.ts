import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalUserStateSchema } from '../types';

const initialState: ModalUserStateSchema = {
    isOpen: false,
};

export const modalUserSlice = createSlice({
    name: 'modal/user',
    initialState,
    reducers: {
        setIsOpen(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload;
        },
    },
});

export const { actions: modalUserActions } = modalUserSlice;
export const { reducer: modalUserReducer } = modalUserSlice;
