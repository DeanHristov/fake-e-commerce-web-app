'use client';

/* Core */
import { Provider } from 'react-redux'; /* Instruments */
import { reduxStore } from './store';
import { ReactNode } from 'react';
import { APIUtils } from '@/utils/APIUtils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IProvidersProps {
  children: ReactNode;
}

// Including mocks
APIUtils.interceptAPICalls();

export const AppProvider = ({ children }: IProvidersProps) => {
  return (
    <>
      <Provider store={reduxStore}>{children}</Provider>
      <ToastContainer />
    </>
  );
};
