'use client';

/* Core */
import { Provider } from 'react-redux'; /* Instruments */
import { reduxStore } from './';
import { ReactNode } from 'react';

interface IProvidersProps {
  children: ReactNode;
}

// Including mocks
const isMocking: boolean =
  process.env.NODE_ENV !== 'test' &&
  Boolean(process.env.API_MOCKING) &&
  process.env.API_MOCKING === 'true';

if (isMocking) {
  require('@/mocks');
}

export const StoreProvider = ({ children }: IProvidersProps) => {
  return <Provider store={reduxStore}>{children}</Provider>;
};
