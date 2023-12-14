import { FC } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import CartContainer from '@/components/containers/CartContainer';
import { APIUtils } from '@/utils/APIUtils';
import { Utils } from '@/utils/Utils';
import { ICartsResponse } from '@/types';

export interface IShoppingCardProps {
  userId: number;
}

export const metadata: Metadata = {
  title: 'Shopping Card',
};

const ShoppingCardPage: FC<IShoppingCardProps> = async ({ userId = 1 }) => {
  const shoppingCart: ICartsResponse = await APIUtils.fetch(
    `/carts/user/${userId}`,
  );

  if (Utils.isNull(shoppingCart.carts)) notFound();

  return (
    <section className="flex flex-col lg:flex-row">
      <CartContainer {...shoppingCart.carts[0]} />
    </section>
  );
};

export default ShoppingCardPage;
