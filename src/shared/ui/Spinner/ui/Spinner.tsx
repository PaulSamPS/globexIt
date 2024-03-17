import clsx from 'clsx';
import { IconSpinner } from '../model/assets';
import { SpinnerProps } from '../model/types';
import styles from './Spinner.module.scss';

export const Spinner = ({
    'aria-label': ariaLabel = 'Загружается...',
    position = 'fixed',
    color,
    ...otherProps
}: SpinnerProps) => (
    <span
        role='status'
        aria-label={ariaLabel}
        className={clsx(styles.spinner, styles[position])}
        style={{ color }}
        {...otherProps}
    >
        <IconSpinner aria-hidden='true' className={styles.self} />
    </span>
);
