import { FC } from 'react';

export interface IDiscountLabelProps {
  discount: number;
}

const DiscountLabel: FC<IDiscountLabelProps> = ({ discount }) => {
  return (
    <div className="card-flag-container">
      <span className="card-flag">{`-${Math.round(discount)}%`}</span>
    </div>
  );
};

export default DiscountLabel;
