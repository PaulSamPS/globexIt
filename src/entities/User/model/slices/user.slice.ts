import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, UserStateSchema } from '../types';

const initialState: UserStateSchema = {
    user: {} as IUser,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
