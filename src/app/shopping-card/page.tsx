import { FC } from 'react';
import { Metadata } from 'next';

import CartContainer from '@/components/containers/CartContainer';

export interface IShoppingCardProps {
  userId: number;
}

export const metadata: Metadata = {
  title: 'Shopping Card',
};

const ShoppingCardPage: FC<IShoppingCardProps> = async ({ userId = 1 }) => {
  //TODO Do a request only if the user has active token!

  // const shoppingCart: ICartsResponse = await APIUtils.fetch(
  //   `/carts/user/${userId}`,
  // );
  //
  // if (Utils.isNull(shoppingCart.carts)) notFound();

  return (
    <section className="flex flex-col lg:flex-row">
      <CartContainer />
    </section>
  );
};

export default ShoppingCardPage;
