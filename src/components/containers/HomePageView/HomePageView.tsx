'use client';

import ProductItem from '@/components/containers/ProductItem';
import useToastError from '@/hooks/useToastError';
import { useDispatch } from '@/store';
import { initProducts } from '@/store/slices/';
import { IProduct } from '@/types';
import { Utils } from '@/utils/Utils';
import { FC, useEffect } from 'react';

export interface IHomePageViewProps {
  products: IProduct[];
  error?: string;
}

const HomePageView: FC<IHomePageViewProps> = ({
  products = [],
  error = null,
}) => {
  const dispatch = useDispatch();

  useToastError(error);

  useEffect(() => {
    if (Utils.isNotEmpty(products)) {
      dispatch(initProducts(products));
    }
  }, [dispatch, products]);

  return (
    <section className="mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-16 relative">
      {products.map((product: IProduct, idx: number) => (
        <ProductItem
          key={`product-item-${product._id}`}
          positionIdx={idx}
          {...product}
        />
      ))}
    </section>
  );
};

export default HomePageView;
