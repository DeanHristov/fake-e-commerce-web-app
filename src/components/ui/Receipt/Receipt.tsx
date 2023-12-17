import { FC } from 'react';
import Divider from '@/components/ui/Divider';
import { ICartProduct, TCurrency } from '@/types';
import { Utils } from '@/utils/Utils';
import format from 'date-fns/format';

export interface IReceiptProps {
  total: number;
  currency: TCurrency;
  products: ICartProduct[];
}

const Receipt: FC<IReceiptProps> = ({ total, currency, products }) => {
  return (
    <div className="cepeipt-container px-4 space-y-6 my-6 pb-6 border border-gray-300 rounded-md">
      <div className="py-2">
        <h3 className="text-center text-slate-900 text-3xl">Fake App</h3>
        <p className="text-center text-sm text-gray-400">
          {format(new Date(), 'dd MMMM, yyyy')}
        </p>
      </div>
      <div className="">
        {products.map(({ title, total, quantity }, index) => (
          <p key={`receipt-item-${index}`} className="receipt-item py-2">
            <span className="text-slate-900 text-sm bg-white px-1 z-10">
              {`(${quantity}x) ${title}`}
            </span>
            <span className="text-slate-900 text-sm bg-white px-1 z-10">
              {Utils.parseAmountByCurrency(total, currency)}
            </span>
          </p>
        ))}
      </div>
      <Divider gradient />
      <p className="receipt-item py-1">
        <span className="text-slate-900 text-sm font-bold bg-white px-1 z-10">
          Total
        </span>
        <span className="text-slate-900 text-sm font-bold bg-white px-1 z-10">
          {Utils.parseAmountByCurrency(total, currency)}
        </span>
      </p>
      <h3 className="text-center text-slate-900 text-2xl">Thank you!</h3>
    </div>
  );
};

export default Receipt;
