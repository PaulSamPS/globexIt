import { AllHTMLAttributes } from 'react';

export interface TextProps extends Omit<AllHTMLAttributes<HTMLSpanElement>, 'size'> {
    size: 's' | 'm' | 'l';
}
