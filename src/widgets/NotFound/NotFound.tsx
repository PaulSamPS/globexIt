import { Title } from '@/shared/ui';
import styles from './NotFound.module.scss';

export const NotFound = () => (
    <div className={styles['not-found']}>
        <Title size='h1'>Ничего не найдено</Title>
    </div>
);
