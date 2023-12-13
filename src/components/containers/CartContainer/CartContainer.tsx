'use client';

import { FC } from 'react';
import InputField from '@/components/ui/InputField';
import Button from '@/components/ui/Button';
import { ICart, ICartProduct } from '@/types';
import Widget from '@/components/containers/Widget';
import CartTable from '@/components/containers/CartTable';
import CartTableHeading from '@/components/containers/CartTable/ui/CartTableHeading/CartTableHeading';
import CartTableRow from '@/components/containers/CartTable/ui/CartTableRow/CartTableRow';
import { Utils } from '@/utils/Utils';

export interface ICartContainerProps extends ICart {}

const CartContainer: FC<ICartContainerProps> = ({
  discountedTotal,
  totalQuantity,
  currency = 'USD',
  products = [],
}) => {
  return (
    <Widget className="w-full h-auto space-y-4 lg:flex lg:justify-start lg:space-x-4 lg:space-y-0">
      <div className="lg:max-w-3xl xl:max-w-4xl">
        <CartTable>
          <CartTableHeading />
          {products?.map((product: ICartProduct) => (
            <CartTableRow
              key={`cart-item-${product.id}`}
              currency={currency}
              {...product}
            />
          ))}
        </CartTable>
      </div>
      <div className="w-full">
        <div className="border border-dark px-3 pb-5">
          <h3 className="px-3 py-3 text-center text-lg text-black">{`${totalQuantity} Items in your Bag`}</h3>
          <p className="py-2 mb-4 border-b border-t border-b-dark border-t-dark uppercase flex justify-between items-center">
            <span className={'font-bold text-md text-black'}>{`total `}</span>

            <span className={'font-medium text-md text-black'}>
              {Utils.isEmpty(products)
                ? '---'
                : Utils.parseAmountByCurrency(discountedTotal, currency)}
            </span>
          </p>
          <InputField
            disabled={Utils.isEmpty(products)}
            placeholder="Enter a promocode"
            className="w-full h-10 mb-4 mx-auto max-w-xl"
            onChange={(ev) => console.log(ev.target.value)}
          />

          <Button
            disabled={Utils.isEmpty(products)}
            className="rounded-none"
            variant="primary"
            title={'Checkout'}
          />
        </div>
      </div>
    </Widget>
  );
};
export default CartContainer;
