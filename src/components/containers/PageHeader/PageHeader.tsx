'use client';

import Button from '@/components/ui/Button';
import { useIsClient } from '@/hooks/useIsClient';
import { useSelector } from '@/store';
import { selectShoppingCart, selectWishListSize } from '@/store/slices';
import { IUser, USER_ROLES } from '@/types';
import { APIUtils } from '@/utils/APIUtils';
import { Utils } from '@/utils/Utils';
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';
import Badge from '../../ui/Badge';

export interface IPageHeaderProps {
  activeUser?: IUser;
}

//@see: https://github.com/vercel/next.js/issues/43704
const PageHeader: FC<IPageHeaderProps> = ({ activeUser }) => {
  const router = useRouter();
  const currentPath = usePathname();
  const shoppingCart = useSelector(selectShoppingCart);
  const wishListTotal = useSelector(selectWishListSize);
  const isClient = useIsClient();

  if (!isClient) return null;

  const handleSignClick = async () => {
    if (Utils.isNotNull(activeUser)) {
      await APIUtils.fetch(`${process.env.BASE_URL}/sign-out/`);
      router.replace('/');
      router.refresh();
    } else {
      router.push('/login');
    }
  };

  return (
    <>
      {currentPath === '/login' && <div />}
      {currentPath !== '/login' && (
        <div className="shadow-md px-2">
          <header className="flex flex-col justify-center items-center space-y-4 min-w-[320px] max-w-screen-xl m-auto md:flex-row">
            <Link
              href={'/'}
              className="w-full text-black font-bold text-2xl text-center md:text-left flex-1"
            >
              Fake App
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
              {activeUser && (
                <Link
                  href={`${
                    activeUser.role === USER_ROLES.ADMIN ? '/admin' : '/profile'
                  }`}
                >
                  <Badge>
                    <UserIcon className="w-7 h-7 text-dark" />
                  </Badge>
                </Link>
              )}

              <Button
                variant="secondary"
                onClick={handleSignClick}
                title={`Sign ${Utils.isNotNull(activeUser) ? 'Out' : 'In'}`}
              />
            </div>
          </header>
        </div>
      )}
    </>
  );
};

export default PageHeader;
