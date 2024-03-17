import { useSelector } from 'react-redux';
import { modalUserActions, ModalUserCard, modalUserSelectors, userSelectors } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks';
import { Spinner, ModalUser } from '@/shared/ui';

export const ModalUserWidget = () => {
    const dispatch = useAppDispatch();
    const isOpen = useSelector(modalUserSelectors.isOpen);
    const user = useSelector(userSelectors.user);

    const onClose = () => {
        dispatch(modalUserActions.setIsOpen(false));
    };

    return (
        <ModalUser
            isOpen={isOpen}
            onClose={onClose}
            spinner={<Spinner position='relative' transparent />}
        >
            {user && (
                <ModalUserCard
                    name={user.name}
                    phone={user.phone}
                    email={user.email}
                    address={user.address}
                    position_name={user.position_name}
                    department={user.department}
                    hire_date={user.hire_date}
                />
            )}
        </ModalUser>
    );
};
