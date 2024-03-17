import * as React from 'react';

export interface SpinnerProps extends React.AllHTMLAttributes<HTMLSpanElement> {
    position?: 'relative' | 'fixed';
    color?: string;
}
