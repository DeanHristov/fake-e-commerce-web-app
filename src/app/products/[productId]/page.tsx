import { FC } from 'react';

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
  // if (Utils.isNull(product)) {
  //   return notFound();
  // }

  return { title: '//TODO!' };
};

const ProductPage: FC<IProductProps> = async ({ params: { productId } }) => {
  // if (Utils.isNull(response.data)) {
  //   return notFound();
  // }

  // const product: IProduct | null = response.data!;

  return (
    <div className="min-h-[88vh] flex flex-col-reverse md:flex-row gap-4">
      {/*<ProductDetails*/}
      {/*  id={product._id}*/}
      {/*  price={product.price}*/}
      {/*  currency={product.currency}*/}
      {/*  name={product.name}*/}
      {/*  image={product.image}*/}
      {/*  description={product.description}*/}
      {/*  rating={product.rating}*/}
      {/*  comments={product?.comments}*/}
      {/*/>*/}
      {/*<ProductCard*/}
      {/*  id={product._id}*/}
      {/*  countInStock={product.countInStock}*/}
      {/*  price={product.price}*/}
      {/*  currency={product.currency}*/}
      {/*/>*/}
    </div>
  );
};

export default ProductPage;
