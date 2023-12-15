export enum PRODUCT_CATEGORIES {
  ELECTRONIC = 'ELECTRONIC',
}

export type TCurrency = 'USD' | 'BGN' | 'EUR';

export interface IComment {
  productId: string;
  _id: string;
  name: string;
  email: string;
  body: string;
  date: string;
}

// Object schema can be seen here: https://dummyjson.com/docs/products
export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images?: string[];
  comments?: IComment[];
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface ICartProduct {
  id: number;
  price: number;
  quantity: number;
  discountPercentage?: number;
  // TODO Fix next line!
  discountedPrice?: number;
  title: string;
  thumbnail: string;
  total: number;
  inStock: number;
}

export interface ICart {
  id: number;
  userId: number;
  total: number;
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
  currency?: TCurrency;
  products: Record<number, ICartProduct>; // Map<number, ICartProduct>;
}

//@see:https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
export interface IMetadataPageTitle {
  title: string;
}

export interface IProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface ICartsResponse {
  carts: ICart[];
  total: number;
  skip: number;
  limit: number;
}
