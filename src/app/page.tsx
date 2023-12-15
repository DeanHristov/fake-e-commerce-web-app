import { FC } from 'react';
import { server } from '@/mocks/server';
import { APIUtils } from '@/utils/APIUtils';
import HomePageView from '@/components/containers/HomePageView';

export interface IHomePageProps {}

server.listen({ onUnhandledRequest: 'bypass' });
const HomePage: FC<IHomePageProps> = async ({}) => {
  const { products } = await APIUtils.fetch(`/products`);

  return <HomePageView products={products} />;
};

export default HomePage;
