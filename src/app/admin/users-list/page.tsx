import { FC } from 'react';
import { Metadata } from 'next';

export interface IUsersListProps {}

export const metadata: Metadata = {
  title: 'Users',
};

const UsersListPage: FC<IUsersListProps> = ({}) => {
  return <div className="h-[88vh]">Users page</div>;
};

export default UsersListPage;
