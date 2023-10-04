import { FC } from 'react';
import { Metadata } from 'next';

export interface IAdminProps {}

export const metadata: Metadata = {
  title: 'Admin',
};

const AdminPage: FC<IAdminProps> = ({}) => {
  return <div className="h-[88vh]">Admin page</div>;
};

export default AdminPage;
