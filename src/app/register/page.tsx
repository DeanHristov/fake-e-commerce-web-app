import { FC } from 'react';
import { Metadata } from 'next';

export interface IRegisterProps {}

export const metadata: Metadata = {
  title: 'Register',
};

const RegisterPage: FC<IRegisterProps> = ({}) => {
  return (
    <div className="flex justify-center items-center h-[93.7vh]">
      Register page
    </div>
  );
};

export default RegisterPage;
