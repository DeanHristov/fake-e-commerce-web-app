import { IProduct } from '@/types';
import { Utils } from '@/utils/Utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const reducerName = 'products';
const initialState: Record<string, IProduct> = Utils.tryToLoadFromStorage(
  reducerName,
  {},
);

export const productsSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    initProducts: (
      state: Record<string, IProduct>,
      action: PayloadAction<IProduct[]>,
    ) => {
      for (let productItem of action.payload) {
        state[productItem._id] = productItem;
      }
    },
  },
});

export const { initProducts } = productsSlice.actions;
export default productsSlice;
