import { ReduxState } from '@/store';
import { IProduct } from '@/types'; // The function below is called a selector and allows us to select a value from

export const selectProducts = (state: ReduxState): Record<number, IProduct> =>
  state.products;

export const selectProductsById = (
  state: ReduxState,
  productId: number,
): IProduct => state.products[productId];
