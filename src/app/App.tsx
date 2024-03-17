import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, usersSelectors } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks';
import { Spinner } from '@/shared/ui';
import { Search, UserCardList } from '@/widgets';
import { NotFound } from '@/widgets/NotFound/NotFound.tsx';
import { ModalUserWidget } from '@/widgets/ModalUserWidget/ModalUserWidget.tsx';

function App() {
    const users = useSelector(usersSelectors.users);
    const isLoading = useSelector(usersSelectors.isLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers.getAll());
    }, []);

    return (
        <main className='app'>
            <Search />
            {isLoading && <Spinner transparent />}
            <UserCardList users={users} />
            <ModalUserWidget />
            {users.length <= 0 && !isLoading && <NotFound />}
        </main>
    );
}

export default App;
