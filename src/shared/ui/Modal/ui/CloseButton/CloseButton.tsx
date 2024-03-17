import { motion } from 'framer-motion';
import styles from './CloseButton.module.scss';
import { CloseIcon } from './model/assets';
import { CloseButtonProps } from './model/types';
import { animateCloseButton } from './model/constant/animate';

export const CloseButton = ({ onClose }: CloseButtonProps) => (
    <motion.button
        className={styles['close-button']}
        onClick={onClose}
        type='button'
        aria-label='Закрыть'
        {...animateCloseButton}
    >
        <CloseIcon className={styles.icon} />
    </motion.button>
);
