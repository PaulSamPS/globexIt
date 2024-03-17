export interface IUser {
    name: string;
    phone: string;
    email: string;
    address: string;
    position_name: string;
    department: string;
    hire_date: string;
}

export interface UsersStateSchema {
    isLoading: boolean;
    users: IUser[];
    error: string | undefined;
}

export interface UserStateSchema {
    user: IUser;
}

export interface ModalUserStateSchema {
    isOpen: boolean;
}
