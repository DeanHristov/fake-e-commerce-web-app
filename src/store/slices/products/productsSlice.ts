import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/types';
import { Utils } from '@/utils/Utils';

const reducerName = 'products';
const initialState: Record<number, IProduct> = Utils.tryToLoadFromStorage(
  reducerName,
  {},
);

export const productsSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    initProducts: (
      state: Record<number, IProduct>,
      action: PayloadAction<IProduct[]>,
    ) => {
      for (let productItem of action.payload) {
        state[productItem.id] = productItem;
      }
    },
  },
});

export const { initProducts } = productsSlice.actions;
export default productsSlice;
