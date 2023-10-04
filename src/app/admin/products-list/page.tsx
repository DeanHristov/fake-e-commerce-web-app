import { FC } from 'react';
import { Metadata } from 'next';

export interface IProductsListProps {}

export const metadata: Metadata = {
  title: 'Products title',
};

const ProductsListPage: FC<IProductsListProps> = ({}) => {
  return <div className="h-[88vh]">Product sList page</div>;
};

export default ProductsListPage;
