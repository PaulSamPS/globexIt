import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { IUser } from '@/entities/User';

interface ReqProps {
    query: string;
}

export const searchByName = createAsyncThunk<IUser[], ReqProps, ThunkConfig<string>>(
    'users/searchByName',
    async ({ query }, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<IUser[]>(`?term=${query}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e: any) {
            const err: AxiosError<{ message: string }> = e;
            return rejectWithValue(err.response ? err.response.data.message : 'error');
        }
    }
);
