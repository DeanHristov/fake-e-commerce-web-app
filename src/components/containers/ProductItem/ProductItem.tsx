'use client';

import Image from 'next/image';
import { FC } from 'react';
import Widget from '@/components/containers/Widget';
import { TCurrency } from '@/types';
import PriceLabel from '@/components/ui/PriceLabel';
import StarRating from '@/components/ui/StarRating';
import StockLabel from '@/components/ui/StockLabel';
import Button from '@/components/ui/Button';

import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import DiscountLabel from '@/components/ui/DiscountLabel';
import { Utils } from '@/utils/Utils';
import ProductHeading from '@/components/ui/ProductHeading';

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

const ProductItem: FC<IProductItemProps> = ({
  id,
  positionIdx,
  title,
  price,
  thumbnail,
  rating,
  discountPercentage,
  stock,
  currency = 'EUR',
}) => {
  return (
    <Widget>
      <div className="group mx-auto h-auto max-w-[288px]">
        {Utils.isNotNull(discountPercentage) && (
          <DiscountLabel discount={discountPercentage!} />
        )}
        <div className="w-full rounded-lg border border-gray-300 h-40 flex justify-center overflow-hidden relative">
          <Image
            priority={positionIdx < 10}
            src={thumbnail}
            width={0}
            height={0}
            sizes="100vw"
            alt={title}
            className={`w-full h-auto rounded-lg transition ${
              stock <= 0 && 'group-hover:opacity-80'
            }`}
          />
        </div>
        <ProductHeading id={id} title={title} />
        <PriceLabel
          currency={currency}
          discountPercentage={discountPercentage}
          price={price}
        />
        <StarRating
          activeColor="#FFA133"
          inActiveColor="#E3E3E3"
          starCount={5}
          rating={rating}
        />
        <StockLabel stock={stock} />
        <div className="flex flex-col gap-y-2 pt-2 md:flex-row md:gap-x-2 md:gap-y-0">
          <Button
            variant="secondary"
            leftIcon={<ShoppingCartIcon className={'w-4 h-4 text-dark'} />}
          />
          <Button
            variant="secondary"
            leftIcon={<HeartIcon className={'w-4 h-4 text-dark'} />}
          />
        </div>
      </div>
    </Widget>
  );
};

export default ProductItem;
