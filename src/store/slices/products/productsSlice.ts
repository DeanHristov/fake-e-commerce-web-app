import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '@/types';

const initialState: IProduct[] = [];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initProducts: (state: IProduct[], action) => {
      return action.payload;
    },
  },
});

export const { initProducts } = productsSlice.actions;
export default productsSlice;
