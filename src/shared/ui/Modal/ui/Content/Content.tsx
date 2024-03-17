import { motion } from 'framer-motion';
import styles from './Content.module.scss';
import { animateContent } from './model/constant/animate';
import { ContentProps } from './model/types';

export const Content = ({ children, width }: ContentProps) => (
    <motion.div className={styles.content} style={{ width }} {...animateContent}>
        {children}
    </motion.div>
);
