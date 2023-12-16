import { FC } from 'react';
import Widget from '@/components/containers/Widget';
import { Utils } from '@/utils/Utils';
import InputField from '@/components/ui/InputField';
import Button from '@/components/ui/Button';
import { TCurrency } from '@/types';
import { useRouter } from 'next/navigation';

export interface IProductCheckoutPanelProps {
  totalQuantity: number;
  totalProducts: number;
  total: number;
  discountedTotal: number;
  userId: number | null;
  currency: TCurrency;
}

const ProductCheckoutPanel: FC<IProductCheckoutPanelProps> = ({
  totalQuantity,
  totalProducts,
  total,
  userId,
  discountedTotal,
  currency,
}) => {
  const router = useRouter();
  return (
    <Widget className="max-h-[16rem] w-full lg:w-auto">
      <div className="p-2">
        {Utils.isNotNull(totalQuantity) && (
          <h3 className="px-3 py-3 text-center text-base text-black border-b border-b-dark">{`${total} Items in your Bag`}</h3>
        )}
        <p className="py-2 mb-4 border-b border-b-dark uppercase flex justify-between items-center">
          <span className={'font-bold text-md text-black'}>{`total `}</span>

          <span className={'font-medium text-md text-black'}>
            {Utils.isNull(discountedTotal)
              ? '---'
              : Utils.parseAmountByCurrency(discountedTotal, currency)}
          </span>
        </p>
        <InputField
          disabled={Utils.isNull(totalProducts)}
          placeholder="Enter a promocode"
          className="w-full h-10 mb-4 mx-auto max-w-xl"
          onChange={(ev) => console.log(ev.target.value)}
        />

        <Button
          disabled={Utils.isNull(total)}
          className="rounded-none"
          variant="primary"
          title={'Checkout'}
          onClick={() => router.push('/checkout')}
        />
      </div>
    </Widget>
  );
};

export default ProductCheckoutPanel;
