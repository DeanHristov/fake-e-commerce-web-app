import './globals.css';
import {Inter} from 'next/font/google';
import {NextFont} from 'next/dist/compiled/@next/font';
import {FC, ReactNode} from 'react';
import {mockServer} from '@mocks/server';
import {Metadata} from 'next';

// Including mocks
if (Boolean(process.env.API_MOCKING)) {
  mockServer.listen({ onUnhandledRequest: 'bypass' });
}

const inter: NextFont = Inter({ subsets: ['latin'] });

export interface IRootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: '%s | Fake E-commerce',
    default: 'Fake E-commerce',
  },
};

const RootLayout: FC<IRootLayoutProps> = async ({ children }) => {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`bg-gray-100 ${inter.className}`}
      >
        <header>[HEADER]</header>
        <main>{children}</main>
        <footer>[Footer]</footer>
      </body>
    </html>
  );
};

export default RootLayout;
