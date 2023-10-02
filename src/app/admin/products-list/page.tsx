import { FC } from 'react';
import { Metadata } from 'next';

export interface IProductsListProps {}

export const metadata: Metadata = {
  title: 'ProductsList title',
};

const ProductsListPage: FC<IProductsListProps> = ({}) => {
  return <div>Product sList page</div>;
};

export default ProductsListPage;
