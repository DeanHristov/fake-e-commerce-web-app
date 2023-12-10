import { FC } from 'react';
import GridView from '@/components/containers/GridView';

export interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = async ({}) => {
  return <GridView />;
};

export default HomePage;
