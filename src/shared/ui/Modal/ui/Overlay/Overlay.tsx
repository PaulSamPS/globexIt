import styles from './Overlay.module.scss';
import { OverlayProps } from './model/types';

export const Overlay = ({ onClose }: OverlayProps) => (
    <div className={styles.overlay} onClick={onClose} aria-label='Закрыть' role='button' tabIndex={0} />
);
