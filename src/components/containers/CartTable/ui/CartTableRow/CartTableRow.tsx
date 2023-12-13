import { FC } from 'react';
import Image from 'next/image';
import { ICartProduct, TCurrency } from '@/types';

import Quantity from '@/components/ui/Quantity';
import PriceLabel from '@/components/ui/PriceLabel';
import ProductHeading from '@/components/ui/ProductHeading';
import RowControls from '@/components/containers/CartTable/ui/RowControls/RowControls';

export interface ICartTableRowProps extends ICartProduct {
  currency?: TCurrency;
}

const CartTableRow: FC<ICartTableRowProps> = ({
  id,
  price,
  quantity,
  discountedPrice,
  thumbnail,
  title,
  discountPercentage,
  currency = 'USD',
}) => {
  return (
    <ul className="w-full h-auto border-b border-b-dark px-2 py-2 md:flex md:justify-start">
      <li className="w-full md:flex md:justify-start md:space-x-2 overflow-hidden">
        <Image
          priority
          src={thumbnail}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className={`w-auto h-auto rounded-lg min-w-[4rem] max-w-[8rem] border border-gray-300 mx-auto md:m-0`}
        />
        <ProductHeading
          id={id}
          title={title}
          className={'text-center md:text-left'}
        >
          <span className="text-black text-sm">{`${quantity}x `}</span>
        </ProductHeading>
      </li>
      <li className="w-full flex justify-center space-x-2 md:pt-2 md:justify-start md:max-w-[8rem]">
        <h3 className="md:hidden">Price: </h3>
        <PriceLabel currency={currency} price={price} />
      </li>
      <li className="w-full md:max-w-[8rem] px-2 pt-2 mx-auto md:p-0">
        <Quantity
          onIncrease={(value) => console.log('onIncrease to: ' + value)}
          onDecrease={(value) => console.log('onDecrease to: ' + value)}
          initialValue={quantity}
        />
      </li>
      <li className="w-full md:max-w-[10rem] relative">
        <div className="w-full flex items-center justify-center space-x-2 py-2 md:py-0 md:flex-col">
          <h3 className="md:hidden">Subtotal: </h3>
          <PriceLabel
            currency={currency}
            discountPercentage={discountPercentage}
            price={discountedPrice}
          />
          <span className="text-red-500 font-medium text-center block">{`(-${discountPercentage}%)`}</span>
        </div>
        <RowControls
          className="text-center md:text-left md:absolute md:bottom-0.5 md:right-0"
          onRemove={() => console.log('item is removed')}
          onWishList={() => console.log('moved to wish list')}
        />
      </li>
    </ul>
  );
};

export default CartTableRow;
