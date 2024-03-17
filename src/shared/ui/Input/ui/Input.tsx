import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
    onChange: (value: string) => void;
    value: string;
}

export const Input = ({ onChange, value, className, ...props }: InputProps) => (
    <input className={styles.input} type='text' value={value} onChange={(e) => onChange(e.target.value)} {...props} />
);
