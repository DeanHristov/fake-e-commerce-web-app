import { ReduxState } from '@/store';
import { ICart } from '@/types'; // The function below is called a selector and allows us to select a value from

export const selectCarts = (state: ReduxState): ICart => state.shoppingCart;
