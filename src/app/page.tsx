import { FC } from 'react';
import ProductItem, {
  IProductItemProps,
} from '../components/containers/ProductItem';
import APIService from '../services/APIService';

export interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = async ({}) => {
  const api: APIService = APIService.getInstance();
  const { data } = await api.fetch<IProductItemProps[]>('/products');

  return (
    <div className="min-h-[88vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data?.map((item) => <ProductItem key={item._id} {...item} />)}
    </div>
  );
};

export default HomePage;
