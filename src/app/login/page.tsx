import { FC } from 'react';
import { Metadata } from 'next';
import LoginForm from '../../components/containers/LoginForm';

export interface ILoginProps {}

export const metadata: Metadata = {
  title: 'Login',
};

const LoginPage: FC<ILoginProps> = ({}) => {
  return (
    <section className="flex justify-center items-center h-[93.7vh]">
      <LoginForm />
    </section>
  );
};

export default LoginPage;
