import clsx from 'clsx';
import styles from './CloseButton.module.scss';
import { CloseIcon } from '../model/assets';
import { ModalCloseButtonProps } from '../model/types';

export const CloseButton = ({ onClose, position = 'absolute' }: ModalCloseButtonProps) => (
    <button
        className={clsx(styles['close-button'], styles[position])}
        aria-label='Закрыть'
        onClick={onClose}
        type='button'
    >
        <CloseIcon className={styles.icon} />
    </button>
);
