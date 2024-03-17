import { ReactElement, ReactNode } from 'react';

export interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    spinner: ReactElement;
}
