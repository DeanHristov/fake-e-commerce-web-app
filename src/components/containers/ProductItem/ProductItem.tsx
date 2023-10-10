'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useCallback } from 'react';
import { IProduct } from '../../../types';
import { Utils } from '../../../utils/Utils';
import Widget from '../Widget';

export interface IProductItemProps extends IProduct {}

const ProductItem: FC<IProductItemProps> = ({
  name,
  image,
  price,
  _id,
  currency,
}) => {
  const router = useRouter();
  const handlerClick = useCallback(() => router.push(`/products/${_id}`), []);

  return (
    <div>
      <Widget>
        <Image alt="" src={image} width={640} height={320} />
        <h3
          onClick={handlerClick}
          className="text-xl text-slate-700 border underline hover:cursor-pointer mt-1"
        >
          {name}
        </h3>
        <span className="text-gray-400 font-bold text-lg">
          {Utils.parseAmountbyCurrency(price, currency)}
        </span>
      </Widget>
    </div>
  );
};

export default ProductItem;
