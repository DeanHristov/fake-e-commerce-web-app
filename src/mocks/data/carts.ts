import { ICart } from '@/types';

export const carts: ICart[] = [
  {
    id: 1,
    products: [
      {
        id: 59,
        title: 'Spring and summershoes',
        price: 20,
        quantity: 3,
        total: 60,
        discountPercentage: 8.71,
        discountedPrice: 55,
        thumbnail: 'https://i.dummyjson.com/data/products/59/thumbnail.jpg',
      },
      {
        id: 88,
        title: 'TC Reusable Silicone Magic Washing Gloves',
        price: 29,
        quantity: 2,
        total: 58,
        discountPercentage: 3.19,
        discountedPrice: 56,
        thumbnail: 'https://i.dummyjson.com/data/products/88/thumbnail.jpg',
      },
    ],
    currency: 'EUR',
    total: 2,
    discountedTotal: 1941,
    userId: 97,
    totalProducts: 2,
    totalQuantity: 2,
  },
];
