import { StateSchema } from '@/app/providers/StoreProvider';

export const user = (state: StateSchema) => state.user?.user;
