import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { IUser } from '@/entities/User';

const cache: Map<string, IUser[]> = new Map();

export const getAll = createAsyncThunk<IUser[], void, ThunkConfig<string>>('users/getAll', async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        if (!cache.has('all')) {
            const response = await extra.api.get<IUser[]>('');

            if (!response.data) {
                throw new Error();
            }

            cache.set('all', response.data);

            return response.data;
        }

        return Array.from(cache.get('all')!);
    } catch (e: any) {
        const err: AxiosError<{ message: string }> = e;
        return rejectWithValue(err.response ? err.response.data.message : 'error');
    }
});
