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
    <div className="w-full space-y-4 lg:flex lg:justify-start lg:space-x-3 lg:space-y-0">
      <Widget className="min-h-[16rem] w-full">
        <CartTable>
          <CartTableHeading />
          {Utils.isEmpty(products) && (
            <h3 className="px-3 py-3 text-center text-lg text-black mt-16">
              Empty!
            </h3>
          )}
          {products.map((product: ICartProduct) => (
            <CartTableRow
              key={`cart-item-${product.id}`}
              currency={currency}
              {...product}
            />
          ))}
        </CartTable>
      </Widget>

      <Widget className="max-h-[16rem] w-full lg:w-auto">
        <div className="p-2">
          {Utils.isNotNull(totalQuantity) && (
            <h3 className="px-3 py-3 text-center text-base text-black border-b border-b-dark">{`${totalQuantity} Items in your Bag`}</h3>
          )}
          <p className="py-2 mb-4 border-b border-b-dark uppercase flex justify-between items-center">
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
      </Widget>
    </div>
  );
};
export default CartContainer;
