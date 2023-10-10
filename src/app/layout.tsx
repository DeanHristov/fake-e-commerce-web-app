import { Metadata } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';
import { FC, ReactNode } from 'react';
import PageFooter from '../components/containers/PageFooter/PageFooter';
import PageHeader from '../components/containers/PageHeader';
import mockServer from '../mocks/server';
import './globals.css';

// Including mocks
if (Boolean(process.env.API_MOCKING)) {
  mockServer.listen();
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

//@see: https://github.com/vercel/next.js/issues/43704
//TODO Removed hard-coded height (h-[88vh]) from pages when the issue above is solved!
//TODO Move the "usePathname()" functionality from the PageHeader here when the issue above is solved!

const RootLayout: FC<IRootLayoutProps> = async ({ children }) => {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`bg-gray-100 ${inter.className} `}
      >
        <PageHeader />
        <main className="min-w-[320px] max-w-screen-xl m-auto pt-4">
          {children}
        </main>
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
