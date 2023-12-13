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
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  title: string;
  thumbnail: string;
}

export interface ICart {
  id: number;
  userId: number;
  total: number;
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
  currency?: TCurrency;
  products: ICartProduct[];
}
