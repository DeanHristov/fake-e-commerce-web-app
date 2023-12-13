import { FC } from 'react';

export interface IStockLabelProps {
  stock: number;
}

const StockLabel: FC<IStockLabelProps> = ({ stock }) => {
  return (
    <div className="flex items-center space-x-1 mt-5">
      <div
        className={`w-1.5 h-1.5 ${
          stock < 10 ? 'bg-red-500 animate-ping' : 'bg-hover'
        } rounded-full`}
      ></div>
      <span className="text-xs text-black leading-4">{`${stock}+ pcs. in stock`}</span>
    </div>
  );
};

export default StockLabel;
