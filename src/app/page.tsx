import { FC } from 'react';

import HomePageView from '@/components/containers/HomePageView';
import { IProduct } from '@/types';
import { APIUtils } from '@/utils/APIUtils';

export interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = async ({}) => {
  const { data, error } = await APIUtils.fetch<IProduct[]>(
    `${process.env.API_URL}/products?limit=20`,
  );

  return <HomePageView error={error} products={data} />;
};

export default HomePage;
