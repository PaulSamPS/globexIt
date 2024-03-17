import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema.ts';
import { createReduxStore } from '../config/store.ts';

interface StoreProviderProps {
    children?: ReactNode;
    initialSate?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({ children, initialSate }: StoreProviderProps) => {
    const store = createReduxStore(initialSate as StateSchema);

    return <Provider store={store}>{children}</Provider>;
};
