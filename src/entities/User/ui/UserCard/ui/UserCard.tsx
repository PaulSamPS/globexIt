import { EmailIcon, PhoneIcon } from '@/shared/assets';
import { Text, Title, Card } from '@/shared/ui';
import styles from './UserCard.module.scss';
import { UserCardProps } from '../model/types';

export const UserCard = ({ name, phone, email }: UserCardProps) => (
    <Card className={styles.wrapper}>
        <Title size='h2' className={styles.name}>
            {name}
        </Title>
        <div className={styles.contact}>
            <PhoneIcon />
            <Text size='s'>{phone}</Text>
        </div>
        <div className={styles.contact}>
            <EmailIcon />
            <Text size='s'>{email}</Text>
        </div>
    </Card>
);
