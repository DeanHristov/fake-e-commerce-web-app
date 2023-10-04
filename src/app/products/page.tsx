import { FC } from 'react';
import { Metadata } from 'next';

export interface IProductsProps {}

export const metadata: Metadata = {
  title: 'Products',
};

const ProductsPage: FC<IProductsProps> = ({}) => {
  return <div className="h-[88vh]">Products page</div>;
};

export default ProductsPage;
