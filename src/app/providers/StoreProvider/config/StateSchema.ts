import { AxiosInstance } from 'axios';
import { UsersStateSchema, UserStateSchema, ModalUserStateSchema } from '@/entities/User';

export interface StateSchema {
    user: UserStateSchema;
    users: UsersStateSchema;
    modalUser: ModalUserStateSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
