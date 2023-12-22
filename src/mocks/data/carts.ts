import { ICart } from '@/types';

export const carts: ICart[] = [
  {
    _id: '34e1d41b-384a-4bf4-866e-ab5b268d124c',
    products: {
      '8f12eb53-18c8-46a6-b975-ea0ee8b62d4c': {
        _id: '8f12eb53-18c8-46a6-b975-ea0ee8b62d4c',
        title: 'Spring and summershoes',
        price: 20,
        quantity: 3,
        total: 60,
        discountPercentage: 8.71,
        discountedPrice: 55,
        thumbnail: 'https://i.dummyjson.com/data/products/59/thumbnail.jpg',
        inStock: 5,
      },
    },
    currency: 'EUR',
    total: 2,
    discountedTotal: 1941,
    userId: 'ba500896-80ca-42bd-b7f7-a743b959203e',
    totalProducts: 2,
    totalQuantity: 2,
  },
];
