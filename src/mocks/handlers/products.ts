import { MockedRequest, rest, RestContext, RestHandler } from 'msw';
import mockedProducts from '../data/products';
import { IProduct } from '../../types';

export let productsHandler: RestHandler<MockedRequest<IProduct>>[] = [
  // Fetching the all products
  rest.get(`${process.env.API_URL}/todos`, (req, res, ctx: RestContext) => {
    return res(ctx.status(200), ctx.json(mockedProducts));
  }),
];
