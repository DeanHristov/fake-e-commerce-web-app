'use client';
import Image from 'next/image';
import { FC } from 'react';
import Widget from '../Widget';
import { TCurrency } from '@/types';
import { Utils } from '@/utils/Utils';

export interface IProductDetailsProps {
  name: string;
  image: string;
  currency: TCurrency;
  description: string;
  rating: number;
  price: number;
}

const ProductDetails: FC<IProductDetailsProps> = ({
  name,
  image,
  description,
  rating,
  price,
  currency,
}) => {
  return (
    <div className="flex-1">
      <Widget>
        <div className="flex flex-col lg:flex-row">
          <Image
            className="border-gray-300 border m-auto"
            alt=""
            width={440}
            height={320}
            src={image}
          />
          <div className="w-full">
            <h3 className="p-2  text-gray-500 border-b border-t border-gray-300">
              {name}
            </h3>
            <span className="block  text-gray-500 p-2 border-b border-gray-300">
              {Utils.parseAmountByCurrency(price, currency)}
            </span>
            <span className="block p-2 border-b border-gray-300">{rating}</span>
          </div>
        </div>
        <p className="py-2 mb-10 text-gray-500">{description}</p>
      </Widget>
    </div>
  );
};

export default ProductDetails;
