import { FC } from 'react';
import { server } from '@/mocks/server';
import { APIUtils } from '@/utils/APIUtils';
import { IProduct } from '@/types';
import ProductItem from '@/components/containers/ProductItem';

export interface IHomePageProps {}

server.listen({ onUnhandledRequest: 'bypass' });
const HomePage: FC<IHomePageProps> = async ({}) => {
  const { products } = await APIUtils.fetch(`/products`);

  return (
    <main className="mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-16 relative">
      {products.map((product: IProduct, idx: number) => (
        <ProductItem
          key={`product-item-${idx}`}
          positionIdx={idx}
          {...product}
        />
      ))}
    </main>
  );
};

export default HomePage;
