import { IProduct, PRODUCT_CATEGORIES } from '../../types';

const products: IProduct[] = [
  {
    name: 'Airpods Pro2 Headphones',
    image: '/images/airpods.jpg',
    description:
      "Apple's new H2 chip is the driving force behind AirPods Pro and their improved sound characteristics. It works in unison with a personalized driver and amplifier for crystal clear heights and deep, rich bass with incredible clarity, so every sound is more pronounced than ever",
    brand: 'Apple',
    category: PRODUCT_CATEGORIES.ELECTRONIC,
    price: 399.99,
    countInStock: 10,
    rating: 4.5,
    reviews: 5,
  },
];

export default products;
