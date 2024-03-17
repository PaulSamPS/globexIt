import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema.ts';
import { $api } from '@/shared/lib';
import { userReducer, usersReducer, modalUserReducer } from '@/entities/User';

export const createReduxStore = (initialState: StateSchema) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        users: usersReducer,
        modalUser: modalUserReducer,
    };

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    return configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        devTools: true,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    });
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
