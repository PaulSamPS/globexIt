import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { IUser } from '@/entities/User';

export const getAll = createAsyncThunk<IUser[], void, ThunkConfig<string>>('users/getAll', async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.get<IUser[]>('');

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e: any) {
        const err: AxiosError<{ message: string }> = e;
        return rejectWithValue(err.response ? err.response.data.message : 'error');
    }
});
