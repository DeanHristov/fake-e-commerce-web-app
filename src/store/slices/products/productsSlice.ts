import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/types';

const initialState: Record<number, IProduct> = {};

export const productsSlice = createSlice({
  name: 'products',
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
