'use client';

/* Core */
import { Provider } from 'react-redux'; /* Instruments */
import { reduxStore } from './store';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IProvidersProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IProvidersProps) => {
  return (
    <>
      <Provider store={reduxStore}>{children}</Provider>
      <ToastContainer />
    </>
  );
};
