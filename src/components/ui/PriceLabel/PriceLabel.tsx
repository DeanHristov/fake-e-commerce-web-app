import { FC } from 'react';
import { Utils } from '@/utils/Utils';
import { TCurrency } from '@/types';

export interface IPriceLabelProps {
  price: number;
  discountPercentage?: number;
  currency?: TCurrency;
}

const PriceLabel: FC<IPriceLabelProps> = ({
  price,
  discountPercentage,
  currency = 'EUR',
}) => {
  return (
    <div
      className={`mt-3 ${Utils.isNotNull(discountPercentage) && 'space-x-2'}`}
    >
      {Utils.isNotNull(discountPercentage) && (
        <>
          <span className="text-md font-normal text-zinc-400 line-through leading-4">
            {Utils.calculateOldPrice(price, discountPercentage!, currency)}
          </span>
          <span className="text-md font-normal text-zinc-400">{'/'}</span>
        </>
      )}
      <span className="text-lg font-medium text-black">
        {Utils.parseAmountByCurrency(price, currency)}
      </span>
    </div>
  );
};

export default PriceLabel;
