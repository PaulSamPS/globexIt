import { FormEvent, useState } from 'react';
import { Input } from '@/shared/ui/Input';
import { SearchIcon } from '@/shared/assets';
import { fetchUsers } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks';
import styles from './Search.module.scss';

export const Search = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const dispatch = useAppDispatch();
    const search = (e: FormEvent) => {
        e.preventDefault();
        dispatch(fetchUsers.searchByName({ query: searchValue }));
    };

    return (
        <form className={styles.search} onSubmit={search}>
            <Input className='search' onChange={setSearchValue} value={searchValue} />
            <button
                type='submit'
                aria-label='Поиск'
                className={styles.submit}
                disabled={!searchValue.trim()}
                tabIndex={0}
            >
                <SearchIcon />
            </button>
        </form>
    );
};
