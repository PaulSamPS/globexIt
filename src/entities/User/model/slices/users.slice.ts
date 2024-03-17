import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, UsersStateSchema } from '../types';
import { getAll, searchByName } from '../services';

const initialState: UsersStateSchema = {
    error: undefined,
    isLoading: false,
    users: [],
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getAll.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload;
                state.error = undefined;
                state.isLoading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(searchByName.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(searchByName.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload;
                state.error = undefined;
                state.isLoading = false;
            })
            .addCase(searchByName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: usersActions } = usersSlice;
export const { reducer: usersReducer } = usersSlice;
