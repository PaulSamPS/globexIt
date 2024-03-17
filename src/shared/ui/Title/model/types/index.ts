import { AllHTMLAttributes } from 'react';

export interface TitleProps extends Omit<AllHTMLAttributes<HTMLElement>, 'size'> {
    size: 'h1' | 'h2' | 'h3';
    uppercase?: boolean;
}
