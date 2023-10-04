import { FC } from 'react';
import { Metadata } from 'next';

export interface IShoppingCardProps {}

export const metadata: Metadata = {
  title: 'Shopping Card',
};

const ShoppingCardPage: FC<IShoppingCardProps> = ({}) => {
  return <div className="h-[88vh]">ShoppingCard page</div>;
};

export default ShoppingCardPage;
