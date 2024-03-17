import { Title, Text } from '@/shared/ui';
import styles from './ModalUserCard.module.scss';
import { ModalUserCardProps } from '../model/types';

export const ModalUserCard = ({ ...props }: ModalUserCardProps) => (
    <div>
        <Title className={styles.name} size='h2'>
            {props.name}
        </Title>
        <div className={styles.item}>
            <Text className={styles.label} size='l'>
                Телефон:
            </Text>
            <Text className={styles.value} size='m'>
                {props.phone}
            </Text>
        </div>
        <div className={styles.item}>
            <Text className={styles.label} size='l'>
                Почта:
            </Text>
            <Text className={styles.value} size='m'>
                {props.email}
            </Text>
        </div>
        <div className={styles.item}>
            <Text className={styles.label} size='l'>
                Дата приема:
            </Text>
            <Text className={styles.value} size='m'>
                {props.hire_date}
            </Text>
        </div>
        <div className={styles.item}>
            <Text className={styles.label} size='l'>
                Должность:
            </Text>
            <Text className={styles.value} size='m'>
                {props.position_name}
            </Text>
        </div>
        <div className={styles.item}>
            <Text className={styles.label} size='l'>
                Подразделение:
            </Text>
            <Text className={styles.value} size='m'>
                {props.department}
            </Text>
        </div>
        <div className={styles['more-info']}>
            <Text size='l'>Дополнительная информация:</Text>
            <Text className={styles.value} size='m'>
                {props.address}
            </Text>
        </div>
    </div>
);
