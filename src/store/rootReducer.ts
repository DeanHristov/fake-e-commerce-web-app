import { apiSlice, modalBoxSlice } from './slices';

export const reducer = {
  [apiSlice.reducerPath]: apiSlice.reducer,
  [modalBoxSlice.name]: modalBoxSlice.reducer,
};
