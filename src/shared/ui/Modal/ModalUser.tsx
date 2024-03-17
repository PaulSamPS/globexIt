import { Suspense } from 'react';
import { Portal } from './ui/Portal';
import { Overlay } from './ui/Overlay';
import { Container } from './ui/Container';
import { Content } from './ui/Content';
import { CloseButton } from './ui/CloseButton';
import { ModalProps } from './model/types';

export const ModalUser = ({ isOpen, onClose, spinner, children }: ModalProps) => (
    <Portal>
        <Container isOpen={isOpen} onClose={onClose}>
            <Overlay onClose={onClose} />
            <Suspense fallback={spinner}>
                <Content width={500}>
                    {children}
                    <CloseButton onClose={onClose} />
                </Content>
            </Suspense>
        </Container>
    </Portal>
);
