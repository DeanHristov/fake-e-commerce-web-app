import { FC, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

export interface IProductHeadingProps {
  id: number;
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
  const router = useRouter();

  return (
    <h3
      onClick={() => router.push(`/products/${id}`)}
      className={`text-black text-lg mt-2 truncate hover:underline hover:cursor-pointer ${className}`}
    >
      {children}
      {title}
    </h3>
  );
};

export default ProductHeading;
