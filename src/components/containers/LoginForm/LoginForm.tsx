'use client';

import { FC } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import Widget from '../Widget';
import FormField from '../../ui/FormField';
import Button from '../../ui/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export interface ILoginFormProps {}

export enum LOGIN_FORM_FIELDS {
  EMAIL = 'email',
  PASSWORD = 'password',
}

// TODO Adjust the form with an AWS Cognito workflow!
// TODO Make the form more user-friendly with a nice feedback on un-success sign in
// TODO Fix the issue in console: content.js:1 Uncaught (in promise) Error: Something went wrong. Please check back shortly.
const LoginForm: FC<ILoginFormProps> = ({}) => {
  const router = useRouter();
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      [LOGIN_FORM_FIELDS.EMAIL]: '',
      [LOGIN_FORM_FIELDS.PASSWORD]: '',
    },

    validationSchema: object({
      [LOGIN_FORM_FIELDS.EMAIL]: string().email().required(),
      [LOGIN_FORM_FIELDS.PASSWORD]: string().min(3).max(33).required(),
    }),

    onSubmit: async (values, { resetForm }) => {
      const controller = new AbortController();
      const response = await fetch('/api/sign-in/', {
        signal: controller.signal,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        resetForm();
        return controller.abort();
      }

      // TODO Push the data in some store!
      // const data = await response.json();

      router.push('/');
    },
  });

  return (
    <Widget title="Login">
      <form onSubmit={formik.handleSubmit}>
        <FormField
          className="py-2 w-96"
          label="Enter an Email"
          id={LOGIN_FORM_FIELDS.EMAIL}
          name={LOGIN_FORM_FIELDS.EMAIL}
          value={formik.values[LOGIN_FORM_FIELDS.EMAIL]}
          onChange={formik.handleChange}
        />

        <FormField
          className="py-2 w-96"
          label="Enter a password"
          type="password"
          id={LOGIN_FORM_FIELDS.PASSWORD}
          name={LOGIN_FORM_FIELDS.PASSWORD}
          value={formik.values[LOGIN_FORM_FIELDS.PASSWORD]}
          onChange={formik.handleChange}
        />

        <Button type="submit" className="py-2 w-96" title={'Login'} />
      </form>

      <Link href="/reset-password" className="text-blue-400 text-sm">
        Reset password
      </Link>
    </Widget>
  );
};

export default LoginForm;
