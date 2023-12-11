import { FC } from 'react';
import { Metadata } from 'next';

export interface IShoppingCardProps {}

export const metadata: Metadata = {
  title: 'Shopping Card',
};

const ShoppingCardPage: FC<IShoppingCardProps> = ({}) => {
  return <div>ShoppingCard page</div>;
};

export default ShoppingCardPage;
