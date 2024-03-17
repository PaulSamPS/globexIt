import { motion } from 'framer-motion';
import { userActions, modalUserActions, IUser, UserCard } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks';
import { UserCardListProps } from '../model/types';
import styles from './UserCardList.module.scss';

export const UserCardList = ({ users }: UserCardListProps) => {
    const dispatch = useAppDispatch();

    const onOpenModal = () => {
        dispatch(modalUserActions.setIsOpen(true));
    };

    const handleClick = (user: IUser) => {
        onOpenModal();
        dispatch(userActions.setUser(user));
    };

    return (
        <div className={styles.list}>
            {users.map((user) => (
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '10px' }}
                    key={user.phone}
                    onClick={() => handleClick(user)}
                >
                    <UserCard name={user.name} phone={user.phone} email={user.email} />
                </motion.div>

            ))}
        </div>
    );
};
