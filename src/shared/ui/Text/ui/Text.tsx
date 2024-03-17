import clsx from 'clsx';
import { TextProps } from '../model/types';
import styles from './Text.module.scss';

export const Text = ({ size, children, className, ...restProps }: TextProps) => {
    const classes = clsx(styles.text, styles[size], className);

    return (
        <span {...restProps} className={classes}>
            {children}
        </span>
    );
};
