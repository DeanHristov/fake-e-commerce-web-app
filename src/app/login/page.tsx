import { FC } from 'react';
import { Metadata } from 'next';
import LoginForm from '../../components/containers/LoginForm';

export interface ILoginProps {}

export const metadata: Metadata = {
  title: 'Login',
};

const LoginPage: FC<ILoginProps> = ({}) => {
  return (
    <div className="flex justify-center items-center h-[93.7vh]">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
