export enum PRODUCT_CATEGORIES {
  ELECTRONIC = 'ELECTRONIC',
}

export interface IProduct {
  name: string;
  image: string;
  description: string;
  brand: string;
  category: PRODUCT_CATEGORIES;
  price: number;
  countInStock: number;
  rating: number;
  reviews: number;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
