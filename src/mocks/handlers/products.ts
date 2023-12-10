import { MockedRequest, rest, RestContext, RestHandler } from 'msw';
import mockedProducts from '../data/products';
import { IProduct } from '@/types';

export let productsHandler: RestHandler<MockedRequest<IProduct>>[] = [
  // Fetching the all products
  rest.get(`${process.env.API_URL}/products`, (req, res, ctx: RestContext) => {
    return res(
      ctx.status(200),
      ctx.json({
        products: mockedProducts,
        total: 100,
        skip: 0,
        limit: 30,
      }),
    );
  }),

  // Fetching a single product
  rest.get(
    `${process.env.API_URL}/products/:productId`,
    (req, res, ctx: RestContext) => {
      const { productId } = req.params;
      const outputItem: IProduct | undefined = mockedProducts.find(
        (item: IProduct) => item.id === Number(productId),
      );

      return res(ctx.status(200), ctx.json(outputItem ?? null));
    },
  ),
];
