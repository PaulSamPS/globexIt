import { useEffect, useState } from 'react';
import { Input } from '@/shared/ui/Input';
import { SearchIcon } from '@/shared/assets';
import { fetchUsers } from '@/entities/User';
import { useAppDispatch, useDebounce } from '@/shared/hooks';
import styles from './Search.module.scss';

export const Search = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const dispatch = useAppDispatch();
    const debounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        dispatch(fetchUsers.searchByName({ query: debounceValue }));
    }, [debounceValue]);

    return (
        <div className={styles.search}>
            <Input
                className={styles.input}
                type='text'
                onChange={setSearchValue}
                value={searchValue}
            />
            <SearchIcon className={styles.icon} />
        </div>
    );
};
