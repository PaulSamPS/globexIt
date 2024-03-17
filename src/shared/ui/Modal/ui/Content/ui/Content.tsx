import clsx from 'clsx';
import styles from './Content.module.scss';
import { ModalContentType } from '../model/types';

export const Content = ({ children, className, ...otherProps }: ModalContentType) => (
    <div className={clsx(styles.content, className)} {...otherProps}>
        {children}
    </div>
);
