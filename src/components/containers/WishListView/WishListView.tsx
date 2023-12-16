'use client';

import { FC } from 'react';
import { useSelector } from '@/store';
import { selectWishList, TWishList } from '@/store/slices';
import { ICartProduct } from '@/types';
import WishListItem from '@/components/ui/WishListItem';

export interface IWishListViewProps {}

const WishListView: FC<IWishListViewProps> = ({}) => {
  const wishItems: TWishList = useSelector(selectWishList);
  const productItems: ICartProduct[] = Object.values(wishItems);

  return (
    <>
      {productItems.map((product: ICartProduct) => (
        <div key={`wish-item-${product.id}`} className="wish-list">
          <WishListItem product={product} />
        </div>
      ))}
    </>
  );
};

export default WishListView;
