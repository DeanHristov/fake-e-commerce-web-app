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

export interface IProduct {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: PRODUCT_CATEGORIES;
  price: number;
  countInStock: number;
  rating: number;
  reviews: number;
  currency: TCurrency;
  comments?: IComment[];
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
