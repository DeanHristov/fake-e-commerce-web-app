import Button from '@/components/ui/Button';
import PriceLabel from '@/components/ui/PriceLabel';
import ProductHeading from '@/components/ui/ProductHeading';
import StarRating from '@/components/ui/StarRating';
import { useDispatch } from '@/store';
import { addToCart, removeFromWishList } from '@/store/slices';
import { ICartProduct } from '@/types';
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { FC, useMemo } from 'react';

export interface IWishListItemProps {
  product: ICartProduct;
}

const WishListItem: FC<IWishListItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const productItem: ICartProduct = useMemo(
    () => ({
      _id: product._id,
      title: product.title,
      price: product.price,
      total: product.price,
      inStock: product.inStock,
      quantity: 1,
      discountPercentage: product.discountPercentage,
      discountedPrice: product.price,
      thumbnail: product.thumbnail,
    }),
    [product],
  );

  return (
    <div className="relative border border-gray-300 px-2 py-2 my-2 flex justify-center items-center bg-white rounded-lg shadow-md gap-x-2 hover:scale-[1.02] transition">
      <Image
        priority
        src={product.thumbnail}
        alt={product.title}
        width={0}
        height={0}
        sizes="100vw"
        className={`mx-auto h-auto w-[8rem] max-h-[5rem] rounded-lg transition border border-gray-300`}
      />
      <div className="flex-1 justify-center items-center">
        <ProductHeading
          id={product._id}
          title={product.title}
          className="inline-block"
        />
        <StarRating
          activeColor="#FFA133"
          inActiveColor="#E3E3E3"
          starCount={5}
          rating={4}
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-36">
        <PriceLabel
          currency={'EUR'}
          discountPercentage={product.discountPercentage}
          price={product.price}
        />
      </div>
      <div className="w-32 space-y-2">
        <Button
          variant="secondary"
          onClick={() => dispatch(addToCart(productItem))}
          leftIcon={<ShoppingCartIcon className={'w-4 h-4 text-dark'} />}
        />

        <Button
          variant="secondary"
          onClick={() =>
            dispatch(removeFromWishList({ productId: product._id }))
          }
          leftIcon={<TrashIcon className={'w-4 h-4 text-dark'} />}
        />
      </div>
    </div>
  );
};

export default WishListItem;
