'use client';
import Image from 'next/image';
import { FC } from 'react';
import { IComment, TCurrency } from '../../../types';
import { Utils } from '../../../utils/Utils';
import Comment from '../../ui/Comment';
import Widget from '../Widget';

export interface IProductDetailsProps {
  id: string;
  name: string;
  image: string;
  currency: TCurrency;
  description: string;
  rating: number;
  price: number;
  comments?: IComment[];
}

const ProductDetails: FC<IProductDetailsProps> = ({
  id,
  name,
  image,
  description,
  rating,
  price,
  currency,
  comments = [],
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
              {Utils.parseAmountbyCurrency(price, currency)}
            </span>
            <span className="block p-2 border-b border-gray-300">{rating}</span>
          </div>
        </div>
        <p className="py-2 mb-10 text-gray-500">{description}</p>
        {comments.map((item: IComment) => (
          <Comment
            key={item._id}
            name={item.name}
            _id={item._id}
            body={item.body}
            date={item.date}
          />
        ))}
      </Widget>
    </div>
  );
};

export default ProductDetails;
