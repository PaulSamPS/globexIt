import { StateSchema } from '@/app/providers/StoreProvider';

export const users = (state: StateSchema) => state.users.users;
export const isLoading = (state: StateSchema) => state.users.isLoading;
export const error = (state: StateSchema) => state.users.isLoading;
