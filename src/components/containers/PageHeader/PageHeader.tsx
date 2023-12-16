'use client';

import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import Badge from '../../ui/Badge';
import { useSelector } from '@/store';
import { selectCarts, selectWishListSize } from '@/store/slices';

export interface IPageHeaderProps {}

//@see: https://github.com/vercel/next.js/issues/43704

const PageHeader: FC<IPageHeaderProps> = ({}) => {
  const currentPath = usePathname();
  const shoppingCart = useSelector(selectCarts);
  const wishListTotal = useSelector(selectWishListSize);

  return (
    <>
      {currentPath === '/login' && <div />}
      {currentPath !== '/login' && (
        <div className="shadow-md px-2">
          <header className="flex flex-col justify-center items-center space-y-4 min-w-[320px] max-w-screen-xl m-auto md:flex-row">
            <Link
              href={'/'}
              className="w-full text-black font-bold text-2xl text-center md:text-left"
            >
              E-commerce
            </Link>
            <div className="flex justify-center space-x-3">
              <Link href={'/shopping-card'}>
                <Badge counter={shoppingCart.total}>
                  <ShoppingCartIcon
                    className={`${
                      shoppingCart.total > 0 ? 'text-green-500' : ''
                    } w-7 h-7 text-dark`}
                  />
                </Badge>
              </Link>
              <Link href={'/wish-list'}>
                <HeartIcon
                  className={`${
                    wishListTotal > 0 ? 'animate-wish-list' : ''
                  } w-7 h-7 text-dark`}
                />
              </Link>
              <Link href={'/admin'}>
                <Badge>
                  <UserIcon className="w-7 h-7 text-dark" />
                </Badge>
              </Link>
            </div>
          </header>
        </div>
      )}
    </>
  );
};

export default PageHeader;
