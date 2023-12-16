import { FC, useMemo } from 'react';
import { ICartProduct, IProduct, TCurrency } from '@/types';
import Image from 'next/image';

import PriceLabel from '@/components/ui/PriceLabel';
import StockLabel from '@/components/ui/StockLabel';
import Button from '@/components/ui/Button';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import StarRating from '@/components/ui/StarRating';
import { useDispatch, useSelector } from '@/store';
import { addToCart, addToWishList, selectProductsById } from '@/store/slices';

export interface IProductDetailsProps {
  productId: number;
  currency?: TCurrency;
}

const ProductDetails: FC<IProductDetailsProps> = ({
  productId,
  currency = 'EUR',
}) => {
  const dispatch = useDispatch();
  const selectedProduct: IProduct = useSelector((state) =>
    selectProductsById(state, productId),
  );

  const productSlice: ICartProduct = useMemo(
    () => ({
      id: selectedProduct.id,
      title: selectedProduct.title,
      price: selectedProduct.price,
      inStock: selectedProduct.stock,
      total: selectedProduct.price,
      quantity: 1,
      discountPercentage: selectedProduct.discountPercentage,
      discountedPrice: selectedProduct.price,
      thumbnail: selectedProduct.thumbnail,
    }),
    [selectedProduct],
  );

  const ControlButtons = () => (
    // TODO Move it somewhere else!
    <>
      <StarRating
        activeColor="#FFA133"
        inActiveColor="#E3E3E3"
        starCount={5}
        onChange={(value) => console.log(`StarRating: ${value}`)}
        rating={selectedProduct.rating}
      />
      <StockLabel stock={selectedProduct.stock} />
      <div className="flex flex-col gap-y-2 pt-2 md:flex-row md:gap-x-2 md:gap-y-0">
        <Button
          variant="secondary"
          onClick={() => dispatch(addToCart(productSlice))}
          leftIcon={<ShoppingCartIcon className={'w-4 h-4 text-dark'} />}
        />
        <Button
          variant="secondary"
          onClick={() => dispatch(addToWishList(productSlice))}
          leftIcon={<HeartIcon className={'w-4 h-4 text-dark'} />}
        />
      </div>
    </>
  );

  return (
    <div className="w-full bg-white rounded-2xl px-4 pb-4 flex flex-col md:flex-row md:space-y-0 md:space-x-10 ">
      <div className="max-w-sm md:max-h-96 flex-col justify-center items-start mx-auto group">
        <Image
          priority
          src={selectedProduct.thumbnail}
          alt={selectedProduct.title}
          width={0}
          height={0}
          sizes="100vw"
          className={`w-full h-auto max-h-[270px] min-w-[280px] transition hover:-translate-y-2 duration-200  rounded-lg mx-auto`}
        />
        <div className="hidden md:block">
          <ControlButtons />
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-3 w-full">
        <h3 className="product-heading">{selectedProduct.title}</h3>
        <PriceLabel
          price={selectedProduct.price}
          currency={currency}
          discountPercentage={selectedProduct.discountPercentage}
        />
        <p className="h-auto overflow-hidden overflow-y-auto">
          {selectedProduct.description}
        </p>
        <div className="md:hidden">
          <ControlButtons />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
