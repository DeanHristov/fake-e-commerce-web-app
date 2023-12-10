'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useCallback } from 'react';
import { IProduct, TCurrency } from '@/types';
import { Utils } from '@/utils/Utils';
import Widget from '@/components/containers/Widget';

export interface IProductItemProps extends IProduct {
  currency?: TCurrency;
  positionIdx: number;
}

const ProductItem: FC<IProductItemProps> = ({
  title,
  thumbnail,
  price,
  id,
  positionIdx,
  currency = 'EUR',
}) => {
  const router = useRouter();
  const handlerClick = useCallback(() => router.push(`/products/${id}`), []);

  return (
    <div>
      <Widget>
        <Image
          priority={positionIdx < 10}
          alt=""
          src={thumbnail}
          width={640}
          height={320}
        />
        <h3
          onClick={handlerClick}
          className="text-xl text-slate-700 border underline hover:cursor-pointer mt-1"
        >
          {title}
        </h3>
        <span className="text-gray-400 font-bold text-lg">
          {Utils.parseAmountByCurrency(price, currency)}
        </span>
      </Widget>
    </div>
  );
};

export default ProductItem;
