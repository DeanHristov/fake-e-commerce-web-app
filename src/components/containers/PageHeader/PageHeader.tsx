'use client';

import { FC } from 'react';
import Link from 'next/link';
import Button from '../../ui/Button';
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import Badge from '../../ui/Badge';
import SearchField from '../../ui/SearchField';
import { useRouter } from 'next/navigation';

export interface IPageHeaderProps {}

const PageHeader: FC<IPageHeaderProps> = ({}) => {
  const router = useRouter();
  return (
    <div className="shadow-md px-4">
      <header className="flex flex-col md:flex-row  min-w-[320px] max-w-screen-xl m-auto">
        <div className="w-full py-2 md:w-4/12 text-center md:text-left">
          <Link href={'/'} className="w-full text-black font-bold text-2xl">
            E-commerce
          </Link>
        </div>
        <div className="w-full py-2 self-center md:p-0 md:w-96">
          <SearchField
            placeholder={'Search me...'}
            onChange={(value) => console.log(value)}
            rightIcon={
              <MagnifyingGlassIcon className="w-7 h-7 text-zinc-100" />
            }
          />
        </div>
        <div className="w-full py-2 md:w-4/12 flex justify-center md:justify-end items-center">
          <div className="w-24 md:w-14 border text-center">
            <Link href={'/shopping-card'}>
              <Badge counter={6}>
                <ShoppingCartIcon className="w-7 h-7 text-gray-500" />
              </Badge>
            </Link>
          </div>

          <div className="w-24 md:w-14 text-center">
            <Link href={'/admin'}>
              <Badge>
                <UserIcon className="w-7 h-7 text-gray-500" />
              </Badge>
            </Link>
          </div>

          <div className="w-24 text-center">
            <Button onClick={() => router.push('/login')} title={'Login'} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default PageHeader;
