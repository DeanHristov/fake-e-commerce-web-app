'use client';

import { FC, useEffect } from 'react';
import { IProduct } from '@/types';
import ProductItem from '@/components/containers/ProductItem';
import { useDispatch } from '@/store';
import { initProducts } from '@/store/slices/';
import { Utils } from '@/utils/Utils';

export interface IHomePageViewProps {
  products: IProduct[];
}

const HomePageView: FC<IHomePageViewProps> = ({ products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (Utils.isNotEmpty(products)) {
      dispatch(initProducts(products));
    }
  }, []);

  return (
    <section className="mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-16 relative">
      {products.map((product: IProduct, idx: number) => (
        <ProductItem
          key={`product-item-${idx}`}
          positionIdx={idx}
          {...product}
        />
      ))}
    </section>
  );
};

export default HomePageView;
