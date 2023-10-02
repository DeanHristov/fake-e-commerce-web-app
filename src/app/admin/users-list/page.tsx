import { FC } from 'react';
import { Metadata } from 'next';

export interface IUsersListProps {}

export const metadata: Metadata = {
  title: 'UsersList title',
};

const UsersListPage: FC<IUsersListProps> = ({}) => {
  return <div>Users page</div>;
};

export default UsersListPage;
