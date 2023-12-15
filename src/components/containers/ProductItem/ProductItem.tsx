import Image from 'next/image';
import { FC, useMemo } from 'react';

import Widget from '@/components/containers/Widget';
import { ICartProduct, TCurrency } from '@/types';
import PriceLabel from '@/components/ui/PriceLabel';
import StarRating from '@/components/ui/StarRating';
import StockLabel from '@/components/ui/StockLabel';
import Button from '@/components/ui/Button';

import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import DiscountLabel from '@/components/ui/DiscountLabel';
import { Utils } from '@/utils/Utils';
import ProductHeading from '@/components/ui/ProductHeading';
import { useDispatch } from '@/store';
import { addToCart, addToWishList } from '@/store/slices';

export interface IProductItemProps {
  id: number;
  positionIdx: number;
  title: string;
  price: number;
  rating: number;
  category: string;
  thumbnail: string;
  stock: number;
  discountPercentage?: number;
  currency?: TCurrency;
}

const ProductItem: FC<IProductItemProps> = (product) => {
  const dispatch = useDispatch();
  const cartItem: ICartProduct = useMemo(
    () => ({
      id: product.id,
      title: product.title,
      price: product.price,
      total: product.price,
      inStock: product.stock,
      quantity: 1,
      discountPercentage: product.discountPercentage,
      discountedPrice: product.price,
      thumbnail: product.thumbnail,
    }),
    [product],
  );

  return (
    <Widget>
      <div className="group mx-auto h-auto max-w-[288px]">
        {Utils.isNotNull(product.discountPercentage) && (
          <DiscountLabel discount={product.discountPercentage!} />
        )}
        <div className="w-full rounded-lg border border-gray-300 h-40 flex justify-center overflow-hidden relative">
          <Image
            priority={product.positionIdx < 10}
            src={product.thumbnail}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.title}
            className={`w-full h-auto rounded-lg transition ${
              product.stock <= 0 && 'group-hover:opacity-80'
            }`}
          />
        </div>
        <ProductHeading id={product.id} title={product.title} />
        <PriceLabel
          currency={product.currency!}
          discountPercentage={product.discountPercentage}
          price={product.price}
        />
        <StarRating
          activeColor="#FFA133"
          inActiveColor="#E3E3E3"
          starCount={5}
          rating={product.rating}
        />
        <StockLabel stock={product.stock} />
        <div className="flex flex-col gap-y-2 pt-2 md:flex-row md:gap-x-2 md:gap-y-0">
          <Button
            variant="secondary"
            onClick={() => dispatch(addToCart(cartItem))}
            leftIcon={<ShoppingCartIcon className={'w-4 h-4 text-dark'} />}
          />

          <Button
            variant="secondary"
            onClick={() => dispatch(addToWishList(cartItem))}
            leftIcon={<HeartIcon className={'w-4 h-4 text-dark'} />}
          />
        </div>
      </div>
    </Widget>
  );
};

export default ProductItem;
