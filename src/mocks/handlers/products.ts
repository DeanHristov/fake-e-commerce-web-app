import { MockedRequest, rest, RestContext, RestHandler } from 'msw';
import { IProduct } from '../../types';
import mockedProducts from '../data/products';

export let productsHandler: RestHandler<MockedRequest<IProduct>>[] = [
  // Fetching the all products
  rest.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
    (req, res, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(mockedProducts));
    },
  ),
];
