import { FC } from 'react';
import { Metadata } from 'next';

export interface IAdminProps {}

export const metadata: Metadata = {
  title: 'Admin title',
};

const AdminPage: FC<IAdminProps> = ({}) => {
  return <div>Admin page</div>;
};

export default AdminPage;
