import styles from './Container.module.scss';
import { useModal } from '../model/hooks';
import { ModalContainerProps } from '../model/types';

export const Container = ({ isOpen, onClose, children }: ModalContainerProps) => {
    useModal({ isOpen, onClose });

    return (
        <div className={styles.container} role='dialog'>
            <div className={styles.wrapper}>{children}</div>
        </div>
    );
};
