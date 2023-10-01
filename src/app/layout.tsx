import './globals.css';
import {Inter} from 'next/font/google';
import {NextFont} from 'next/dist/compiled/@next/font';
import {FC, ReactNode} from 'react';
import {mockServer} from '@mocks/server';

// Including mocks
if (Boolean(process.env.API_MOCKING)) {
  mockServer.listen({ onUnhandledRequest: 'bypass' });
}

const inter: NextFont = Inter({ subsets: ['latin'] });

export interface IRootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<IRootLayoutProps> = async ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
