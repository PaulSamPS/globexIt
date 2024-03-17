import { IUser } from '@/entities/User';

export interface UserCardProps extends Pick<IUser, 'name' | 'phone' | 'email'> {}
