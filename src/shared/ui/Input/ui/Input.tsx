import clsx from 'clsx';
import styles from './Input.module.scss';
import { InputProps } from '../model/types';

export const Input = ({ onChange, value, type, className, ...props }: InputProps) => (
    <input
        className={clsx(styles.input, className)}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
    />
);
