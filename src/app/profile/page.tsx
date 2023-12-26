import { Metadata } from 'next';
import { FC } from 'react';

export interface IProfilePageProps {}

export const metadata: Metadata = {
  title: 'Profile',
};

const ProfilePage: FC<IProfilePageProps> = async ({}) => {
  return <div>Profile page</div>;
};

export default ProfilePage;
