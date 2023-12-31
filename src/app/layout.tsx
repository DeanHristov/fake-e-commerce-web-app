import { Metadata } from 'next';
import { cookies } from 'next/headers';

import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';
import { FC, ReactNode } from 'react';

import { AppProvider } from '@/AppProvider';
import ModalBox from '@/components/containers/ModalBox';
import PageFooter from '@/components/containers/PageFooter';
import PageHeader from '@/components/containers/PageHeader';
import { IUser } from '@/types';
import { APIUtils } from '@/utils/APIUtils';
import './globals.css';

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
  const cookieStore = cookies();
  const bearerToken = cookieStore.get('token')?.value.split(' ')[1];
  const activeUser: IUser | undefined = await APIUtils.decodeJWToken<IUser>(
    bearerToken!,
  );

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`bg-gray-100 ${inter.className} `}
      >
        <AppProvider>
          <PageHeader activeUser={activeUser} />
          <main className="page-container min-w-[320px] max-w-screen-xl m-auto pt-4 px-2 lg:px-0">
            {children}
            <ModalBox />
          </main>
          <PageFooter>
            <h3 className="p-2 text-center text-slate-900">
              &#169; 2023 | Fake App
            </h3>
          </PageFooter>
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
