'use client';

import { FC } from 'react';
import { ICart, ICartProduct } from '@/types';
import Widget from '@/components/containers/Widget';
import CartTable from '@/components/containers/CartTable';
import CartTableHeading from '@/components/containers/CartTable/ui/CartTableHeading/CartTableHeading';
import { Utils } from '@/utils/Utils';
import ProductCheckoutPanel from '@/components/containers/ProductCheckoutPanel';
import { useSelector } from '@/store';
import { selectCarts } from '@/store/slices';
import CartTableRow from '@/components/containers/CartTable/ui/CartTableRow/CartTableRow';

export interface ICartContainerProps {}

const CartContainer: FC<ICartContainerProps> = ({}) => {
  const shoppingCart: ICart = useSelector(selectCarts);
  const products: ICartProduct[] = Object.values(shoppingCart.products);

  return (
    <div className="w-full space-y-4 lg:flex lg:justify-start lg:space-x-3 lg:space-y-0">
      <Widget className="min-h-[16rem] w-full">
        <CartTable>
          <CartTableHeading />
          {Utils.isEmpty(shoppingCart.products) && (
            <h3 className="px-3 py-3 text-center text-lg text-black mt-16">
              Empty!
            </h3>
          )}

          {products.map((product: ICartProduct) => (
            <CartTableRow
              {...product}
              id={product.id}
              key={`cart-item-${product.id}`}
              currency={shoppingCart.currency}
            />
          ))}
        </CartTable>
      </Widget>
      <ProductCheckoutPanel
        onCheckout={(totalAmount) =>
          console.log('totalAmount', shoppingCart.discountedTotal)
        }
        currency={shoppingCart.currency!}
        total={shoppingCart.total}
        discountedTotal={shoppingCart.discountedTotal}
        userId={shoppingCart.userId}
        totalProducts={shoppingCart.totalProducts}
        totalQuantity={shoppingCart.totalQuantity}
      />
    </div>
  );
};
export default CartContainer;
