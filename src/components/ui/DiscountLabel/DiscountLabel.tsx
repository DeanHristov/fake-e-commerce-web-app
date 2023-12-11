import { FC } from 'react';

export interface IDiscountLabelProps {
  discount: number;
}

const DiscountLabel: FC<IDiscountLabelProps> = ({ discount }) => {
  return (
    <div className="discount-flag-container z-20 bg-red-500 absolute top-5 -left-3 rounded-br rounded-tr">
      <span className="discount-flag block py-2 px-3 text-white text-xs font-medium">
        {`-${discount}%`}
      </span>
    </div>
  );
};

export default DiscountLabel;
