'use client';

import CartTable from '@/components/containers/CartTable';
import CartTableHeading from '@/components/containers/CartTable/ui/CartTableHeading/CartTableHeading';
import CartTableRow from '@/components/containers/CartTable/ui/CartTableRow/CartTableRow';
import ProductCheckoutPanel from '@/components/containers/ProductCheckoutPanel';
import Widget from '@/components/containers/Widget';
import WishListView from '@/components/containers/WishListView';
import Divider from '@/components/ui/Divider';
import { useSelector } from '@/store';
import { selectShoppingCart, selectWishListSize } from '@/store/slices';
import { ICart, ICartProduct } from '@/types';
import { Utils } from '@/utils/Utils';
import { FC } from 'react';

export interface ICartContainerProps {}

const CartContainer: FC<ICartContainerProps> = ({}) => {
  const shoppingCart: ICart = useSelector(selectShoppingCart);
  const totalWishListItems: number = useSelector(selectWishListSize);
  const products: ICartProduct[] = Object.values(shoppingCart.products);

  return (
    <div className="w-full space-y-4 lg:flex lg:justify-start lg:space-x-3 lg:space-y-0">
      <Widget title="Shopping Cart" className="min-h-[16rem] w-full">
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
              _id={product._id}
              key={`cart-item-${product._id}`}
              currency={shoppingCart.currency}
            />
          ))}
        </CartTable>
        {totalWishListItems > 0 && (
          <div className="mt-10 space-y-6 ">
            <Divider gradient />
            <WishListView />
          </div>
        )}
      </Widget>
      <ProductCheckoutPanel
        currency={shoppingCart.currency!}
        total={shoppingCart.total}
        discountedTotal={shoppingCart.discountedTotal}
        totalProducts={shoppingCart.totalProducts}
        totalQuantity={shoppingCart.totalQuantity}
      />
    </div>
  );
};
export default CartContainer;
