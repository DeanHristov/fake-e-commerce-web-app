import {
  apiSlice,
  modalBoxSlice,
  productsSlice,
  shoppingCartSlice,
  wishListSlice,
} from './slices';

export const reducer = {
  [apiSlice.reducerPath]: apiSlice.reducer,
  [modalBoxSlice.name]: modalBoxSlice.reducer,
  [productsSlice.name]: productsSlice.reducer,
  [shoppingCartSlice.name]: shoppingCartSlice.reducer,
  [wishListSlice.name]: wishListSlice.reducer,
};
