import clsx from 'clsx';
import { IconSpinner } from '../model/assets';
import { SpinnerProps } from '../model/types';
import styles from './Spinner.module.scss';

export const Spinner = ({
    'aria-label': ariaLabel = 'Загружается...',
    position = 'fixed',
    color,
    height,
    stretched,
    transparent,
    ...otherProps
}: SpinnerProps) => {
    const classes = clsx(
        styles.spinner,
        styles[position],
        stretched && styles.stretched,
        transparent && styles.transparent
    );

    return (
        <span
            role='status'
            aria-label={ariaLabel}
            className={classes}
            style={{ color, height }}
            {...otherProps}
        >
            <IconSpinner aria-hidden='true' className={styles.self} />
        </span>
    );
};
