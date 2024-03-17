import { ReactNode } from 'react';

export interface ContainerProps {
    children: ReactNode;
    isOpen: boolean | undefined;
    onClose: () => void;
}

export interface useModalProps extends Omit<ContainerProps, 'children'> {}
