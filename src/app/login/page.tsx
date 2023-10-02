import { FC } from 'react';
import { Metadata } from 'next';

export interface ILoginProps {}

export const metadata: Metadata = {
  title: 'Login',
};

const LoginPage: FC<ILoginProps> = ({}) => {
  return <div>login page</div>;
};

export default LoginPage;
