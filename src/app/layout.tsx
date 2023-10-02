import './globals.css';
import {Inter} from 'next/font/google';
import {NextFont} from 'next/dist/compiled/@next/font';
import {FC, ReactNode} from 'react';
import {mockServer} from '@mocks/server';
import {Metadata} from 'next';
import PageFooter from '../components/containers/PageFooter/PageFooter';
import PageHeader from '../components/containers/PageHeader';

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
        <PageHeader />
        <main>{children}</main>
        <PageFooter>
          <h3 className="p-2 text-center text-slate-900">
            &#169; 2023 | Fake App
          </h3>
        </PageFooter>
      </body>
    </html>
  );
};

export default RootLayout;
