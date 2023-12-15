import { createSlice } from '@reduxjs/toolkit';
import { ICartProduct } from '@/types';
import { Utils } from '@/utils/Utils';

export type TWishList = Record<number, ICartProduct>;

const initialState: TWishList = {};

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state: TWishList, action) => {
      const { id } = action.payload;
      if (Utils.isNull(state[id])) {
        state[id] = action.payload;
      }
    },
    removeFromWishList: (state: TWishList, action) => {
      const { productId } = action.payload;
      delete state[productId];
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice;
