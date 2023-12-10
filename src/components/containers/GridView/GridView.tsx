'use client';

import { FC } from 'react';
import { useGetProductsQuery } from '@/store/slices';
import ProductItem from '@/components/containers/ProductItem';

export interface IGridViewProps {}

const GridView: FC<IGridViewProps> = ({}) => {
  const { data: productsData, error } = useGetProductsQuery();

  return (
    <div className="min-h-[88vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {(productsData || []).map((product, idx) => (
        <ProductItem
          key={`product-item-${idx}`}
          positionIdx={idx}
          {...product}
        />
      ))}
    </div>
  );
};

export default GridView;
