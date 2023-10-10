'use client';

import { FC, useCallback, useState } from 'react';
import { TCurrency } from '../../../types';
import { Utils } from '../../../utils/Utils';
import Button from '../../ui/Button';
import InputField from '../../ui/InputField';
import Widget from '../Widget';

export interface IProductCardProps {
  id: string;
  currency: TCurrency;
  countInStock: number;
  price: number;
}

const ProductCard: FC<IProductCardProps> = ({
  countInStock,
  currency,
  id,
  price,
}) => {
  const isAvailable: boolean = countInStock > 0;
  const [quantity, setQuantity] = useState<number>(0);
  const [cardStatus, setCardStatus] = useState();
  const onAddToCard = useCallback(() => {
    //TODO add logic here
  }, [quantity]);

  return (
    <div>
      <Widget>
        <div className="md:pb-2 flex justify-start items-center">
          <span className="md:p-2 w-[50%]  text-gray-500 text-2xl block">
            Price:
          </span>
          <span className="md:p-2 w-[50%]  text-gray-500 text-xl font-bold block">
            {Utils.parseAmountbyCurrency(price, currency)}
          </span>
        </div>
        <div className="md:pb-2 flex justify-start items-center  border-t border-gray-300">
          <span className="md:p-2 w-[50%] text-gray-500 text-2xl block">
            Status:
          </span>
          <span
            className={`md:p-2 w-[50%] block ${
              isAvailable ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {isAvailable ? 'In stock' : 'Out of stock'}
          </span>
        </div>
        <div className="md:mb-8 flex justify-start items-center border-b border-t border-gray-300">
          <span className="md:p-2 w-[50%] text-gray-500 text-2xl block">
            Quantity:
          </span>
          <div className="w-[50%] md:h-10">
            <InputField onChange={(val) => setQuantity(Number(val))} />
          </div>
        </div>
        <Button
          disabled={!isAvailable}
          onClick={onAddToCard}
          title="Add to card"
        />
      </Widget>
    </div>
  );
};

export default ProductCard;
