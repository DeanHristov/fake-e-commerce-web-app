import { FC, useCallback } from 'react';
import Image from 'next/image';
import { ICartProduct, TCurrency } from '@/types';

import Quantity from '@/components/ui/Quantity';
import PriceLabel from '@/components/ui/PriceLabel';
import ProductHeading from '@/components/ui/ProductHeading';
import RowControls from '@/components/containers/CartTable/ui/RowControls/RowControls';
import { useDispatch } from '@/store';
import { addToWishList, removeFromCart, updateQuantity } from '@/store/slices';
import { Utils } from '@/utils/Utils';

export interface ICartTableRowProps extends ICartProduct {
  currency?: TCurrency;
}

const CartTableRow: FC<ICartTableRowProps> = ({
  currency = 'USD',
  ...product
}) => {
  const dispatch = useDispatch();
  const onMoveToWishList = useCallback(() => {
    dispatch(addToWishList(product));
    dispatch(removeFromCart({ productId: product.id }));
  }, [product, dispatch]);

  return (
    <ul className="w-full h-auto min-h-[6rem] border-b border-b-dark px-2 py-2 md:flex md:justify-start">
      <li className="w-full md:flex md:justify-start md:space-x-2 max-h-[10rem] overflow-hidden">
        <Image
          priority
          src={product.thumbnail}
          alt={product.title}
          width={0}
          height={0}
          sizes="100vw"
          className={`w-auto h-auto rounded-lg min-w-[9rem] max-w-[8rem] border border-gray-300 mx-auto md:m-0`}
        />
        <ProductHeading
          id={product.id}
          title={product.title}
          className={'text-center md:text-left'}
        >
          <span className="text-black text-sm">{`${product.quantity}x `}</span>
        </ProductHeading>
      </li>
      <li className="w-full flex justify-center space-x-2 md:justify-start md:max-w-[8rem]">
        <h3 className="md:hidden">Price: </h3>
        <PriceLabel currency={currency} price={product.price} />
      </li>
      <li className="w-2/3 px-2 pt-2 mx-auto md:w-full md:max-w-[8rem] md:p-0">
        <Quantity
          onIncrease={(value) =>
            dispatch(
              updateQuantity({
                quantity: value,
                productId: product.id,
                increase: true,
              }),
            )
          }
          onDecrease={(value) =>
            dispatch(
              updateQuantity({
                quantity: value,
                productId: product.id,
                increase: false,
              }),
            )
          }
          initialValue={product.quantity}
          maxValue={product.inStock}
        />
      </li>
      <li className="w-full md:max-w-[12rem] relative">
        <div className="w-full flex items-center justify-center space-x-2 py-2 md:py-0 md:flex-col">
          <h3 className="md:hidden">Subtotal: </h3>
          <PriceLabel
            currency={currency}
            discountPercentage={product.discountPercentage}
            price={product.total}
          />
          {Utils.isNotNull(product.discountPercentage) && (
            <span className="text-red-500 font-medium text-center block">{`-${Math.round(
              product.discountPercentage!,
            )}%`}</span>
          )}
        </div>
        <RowControls
          className="text-center md:text-left md:absolute md:bottom-0.5 md:right-0"
          onRemove={() => dispatch(removeFromCart({ productId: product.id }))}
          onWishList={onMoveToWishList}
        />
      </li>
    </ul>
  );
};

export default CartTableRow;
