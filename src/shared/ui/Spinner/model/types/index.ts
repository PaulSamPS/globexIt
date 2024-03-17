import { AllHTMLAttributes } from 'react';

export interface SpinnerProps extends Omit<AllHTMLAttributes<HTMLSpanElement>, 'height'>{
    position?: 'relative' | 'fixed';
    color?: string;
    height?: string | number
    stretched?: boolean
    transparent?: boolean
}
