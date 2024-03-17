import { StateSchema } from '@/app/providers/StoreProvider';

export const isOpen = (state: StateSchema) => state.modalUser.isOpen;
