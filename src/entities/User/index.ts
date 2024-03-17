export * as fetchUsers from './model/services';

export type { IUser, UsersStateSchema, UserStateSchema, ModalUserStateSchema } from './model/types';

export { usersReducer } from './model/slices/users.slice.ts';
export { userReducer, userActions } from './model/slices/user.slice.ts';
export { modalUserReducer, modalUserActions } from './model/slices/modalUser.slice.ts';

export * as usersSelectors from './model/selectors/getStateUsers.ts';
export * as userSelectors from './model/selectors/getStateUser.ts';
export * as modalUserSelectors from './model/selectors/getStateModalUser.ts';

export * from './ui/UserCard';
export * from './ui/ModalUserCard';
