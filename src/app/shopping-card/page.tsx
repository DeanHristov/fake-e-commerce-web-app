import { FC } from 'react';
import { Metadata } from 'next';
import CartContainer from '@/components/containers/CartContainer';
import { carts } from '@/mocks/data/carts';

export interface IShoppingCardProps {}

export const metadata: Metadata = {
  title: 'Shopping Card',
};

const ShoppingCardPage: FC<IShoppingCardProps> = ({}) => {
  return (
    <section className="flex flex-col min-h-screen lg:flex-row">
      <CartContainer {...carts[0]} />
    </section>
  );
};

export default ShoppingCardPage;
