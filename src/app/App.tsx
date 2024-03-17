import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, usersSelectors, modalUserSelectors } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks';
import { Spinner } from '@/shared/ui';
import { Search, UserCardList, UserModal } from '@/widgets';
import { NotFound } from '@/widgets/NotFound/NotFound.tsx';

function App() {
    const users = useSelector(usersSelectors.users);
    const isLoading = useSelector(usersSelectors.isLoading);
    const dispatch = useAppDispatch();
    const isOpen = useSelector(modalUserSelectors.isOpen);

    useEffect(() => {
        dispatch(fetchUsers.getAll());
    }, [dispatch]);

    return (
        <main className='app'>
            <Search />
            {isLoading ? <Spinner /> : <UserCardList users={users} />}
            {isOpen && <UserModal />}
            {users.length <= 0 && !isLoading && <NotFound />}
        </main>
    );
}

export default App;
