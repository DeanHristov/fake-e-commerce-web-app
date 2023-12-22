import { useDispatch } from '@/store';
import { MODAL_BOX, openModal } from '@/store/slices';
import { FC, ReactNode } from 'react';

export interface IProductHeadingProps {
  id: string;
  title: string;
  children?: ReactNode;
  className?: string;
}

const ProductHeading: FC<IProductHeadingProps> = ({
  id,
  title,
  children,
  className,
}) => {
  const dispatch = useDispatch();

  return (
    <h3
      onClick={() =>
        dispatch(
          openModal({
            type: MODAL_BOX.SHOW_PRODUCT,
            productId: id,
          }),
        )
      }
      className={`product-heading hover:underline hover:cursor-pointer ${className}`}
    >
      {children}
      {title}
    </h3>
  );
};

export default ProductHeading;
