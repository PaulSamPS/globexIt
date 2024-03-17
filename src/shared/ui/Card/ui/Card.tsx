import clsx from 'clsx';
import styles from './Card.module.scss';
import { CardProps } from '../model/types';

export const Card = ({ children, className, ...otherProps }: CardProps) => (
    <div className={clsx(styles.card, className)} {...otherProps}>
        {children}
    </div>
);
