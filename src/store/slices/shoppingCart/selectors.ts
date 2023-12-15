import { ReduxState } from '@/store';

// The function below is called a selector and allows us to select a value from
// the state. For example: `useSelector((state: RootState) => state.counter.value)
export const selectCarts = (state: ReduxState) => state.shoppingCart;
