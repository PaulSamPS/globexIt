import clsx from 'clsx';
import { ElementType } from 'react';
import styles from './Title.module.scss';
import { TitleProps } from '../model/types';

export const Title = ({ children, size = 'h2', uppercase, className, ...restProps }: TitleProps) => {
    const Component = size as ElementType;

    const classes = clsx(styles[size], styles.title, uppercase && styles.uppercase, className);

    return (
        <Component {...restProps} className={classes}>
            {children}
        </Component>
    );
};
