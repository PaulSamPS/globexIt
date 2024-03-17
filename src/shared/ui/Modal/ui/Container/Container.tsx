import { AnimatePresence, motion } from 'framer-motion';
import styles from './Container.module.scss';
import { animateContainer } from './model/constant/animate';
import { useModal } from './model/hooks';
import { ContainerProps } from './model/types';

export const Container = ({ isOpen, onClose, children }: ContainerProps) => {
    useModal({ isOpen, onClose });

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.container}
                    role='dialog'
                    animate={isOpen ? 'open' : 'closed'}
                    variants={animateContainer}
                    initial='closed'
                    exit='closed'
                >
                    <div className={styles.wrapper}>{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
