import { FC } from 'react';
import { Utils } from '@/utils/Utils';
import { TCurrency } from '@/types';

export interface IPriceLabelProps {
  price: number;
  currency: TCurrency;
  discountPercentage?: number;
}

const PriceLabel: FC<IPriceLabelProps> = ({
  price,
  discountPercentage,
  currency = 'EUR',
}) => {
  const oldPrice = Utils.calculateOldPrice(price, discountPercentage);

  return (
    <div
      className={`${Utils.isNotNull(discountPercentage) ? 'space-x-2' : ''}`}
    >
      {Utils.isNotNull(discountPercentage) && (
        <>
          <span className="price-label-old line-through text-sm">
            {Utils.parseAmountByCurrency(oldPrice, currency)}
          </span>
          <span className="price-label-old">{'/'}</span>
        </>
      )}
      <span className="price-label">
        {Utils.parseAmountByCurrency(price, currency)}
      </span>
    </div>
  );
};

export default PriceLabel;
