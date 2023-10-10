import { notFound } from 'next/navigation';
import { FC } from 'react';
import ProductCard from '../../../components/containers/ProductCard';
import ProductDetails from '../../../components/containers/ProductDetails';
import APIService from '../../../services/APIService';
import { IProduct } from '../../../types';
import { Utils } from '../../../utils/Utils';
interface IMetadataPageTitle {
  title: string;
}

export interface IProductProps {
  params: { productId: string };
}

export const dynamic = 'force-dynamic';

export const generateMetadata = async ({
  params: { productId },
}: IProductProps): Promise<IMetadataPageTitle> => {
  const api: APIService = APIService.getInstance();
  const response = await api.fetch<IProduct>(`/products/${productId}`);
  const product: IProduct | null = response.data;

  if (Utils.isNull(product)) {
    return notFound();
  }

  return { title: product?.name! };
};

const ProductPage: FC<IProductProps> = async ({ params: { productId } }) => {
  const api: APIService = APIService.getInstance();
  const response = await api.fetch<IProduct>(`/products/${productId}`);

  if (Utils.isNull(response.data)) {
    return notFound();
  }

  const product: IProduct | null = response.data!;

  return (
    <div className="min-h-[88vh] flex flex-col-reverse md:flex-row gap-4">
      <ProductDetails
        id={product._id}
        price={product.price}
        currency={product.currency}
        name={product.name}
        image={product.image}
        description={product.description}
        rating={product.rating}
        comments={product?.comments}
      />
      <ProductCard
        id={product._id}
        countInStock={product.countInStock}
        price={product.price}
        currency={product.currency}
      />
    </div>
  );
};

export default ProductPage;
