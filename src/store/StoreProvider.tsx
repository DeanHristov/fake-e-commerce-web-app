'use client';

/* Core */
import { Provider } from 'react-redux'; /* Instruments */
import { reduxStore } from './';
import { ReactNode } from 'react';
import { APIUtils } from '@/utils/APIUtils';

interface IProvidersProps {
  children: ReactNode;
}

// Including mocks
APIUtils.interceptAPICalls();

export const StoreProvider = ({ children }: IProvidersProps) => {
  return <Provider store={reduxStore}>{children}</Provider>;
};
