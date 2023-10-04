import { FC } from 'react';

interface IMetadataPageTitle {
  title: string;
}

export interface IProductProps {
  params: { productId: string };
}

export const generateMetadata = ({
  params: { productId },
}: IProductProps): IMetadataPageTitle => {
  return { title: productId };
};

const ProductPage: FC<IProductProps> = ({ params: { productId } }) => {
  return <div className="h-[88vh]">Product page {productId}</div>;
};

export default ProductPage;
