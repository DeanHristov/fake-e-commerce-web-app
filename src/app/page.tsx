import { FC } from 'react';

export interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = async ({}) => {
  return <div className="h-[88vh]">Home page</div>;
};

export default HomePage;
