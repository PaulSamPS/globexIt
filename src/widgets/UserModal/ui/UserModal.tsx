import { useSelector } from 'react-redux';
import { userSelectors, modalUserActions, modalUserSelectors, ModalUserCard } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks';
import { Spinner, Modal } from '@/shared/ui';

export const UserModal = () => {
    const dispatch = useAppDispatch();
    const user = useSelector(userSelectors.user);
    const isOpen = useSelector(modalUserSelectors.isOpen);

    const onCloseModal = () => {
        dispatch(modalUserActions.setIsOpen(false));
    };

    const onClose = () => {
        dispatch(modalUserActions.setIsOpen(false));
    };

    return (
        <Modal.Portal>
            <Modal.Container isOpen={isOpen} onClose={onCloseModal}>
                <Modal.Overlay onClose={onClose} />
                <Modal.Content style={{ width: 500 }}>
                    {user ? (
                        <ModalUserCard
                            name={user.name}
                            phone={user.phone}
                            email={user.email}
                            address={user.address}
                            position_name={user.position_name}
                            department={user.department}
                            hire_date={user.hire_date}
                        />
                    ) : (
                        <Spinner position='relative' color='var(--plumbum)' />
                    )}
                    <Modal.CloseButton position='absolute' onClose={onClose} />
                </Modal.Content>
            </Modal.Container>
        </Modal.Portal>
    );
};
