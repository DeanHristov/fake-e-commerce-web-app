'use client';

import { FC } from 'react';
import Widget from '../Widget';
import FormField from '../../ui/FormField';
import Button from '../../ui/Button';
import Link from 'next/link';

export interface ILoginFormProps {}

const LoginForm: FC<ILoginFormProps> = ({}) => {
  return (
    <Widget title="Login">
      <FormField
        className="py-2 w-96"
        label="Username or Email"
        onChange={(value) => console.log(value)}
      />
      <FormField
        className="py-2 w-96"
        label="Password"
        type="password"
        onChange={(value) => console.log(value)}
      />

      <Button className="py-2 w-96" title={'Login'} onClick={() => {}} />

      <Link href="/reset-password" className="text-blue-400 text-sm">
        Reset password
      </Link>
    </Widget>
  );
};

export default LoginForm;
