import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartProduct } from '@/types';
import { Utils } from '@/utils/Utils';
import { IRemoveItemPayload } from '@/store/slices';

export type TWishList = Record<number, ICartProduct>;

const initialState: TWishList = {};

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state: TWishList, action: PayloadAction<ICartProduct>) => {
      const { id } = action.payload;
      if (Utils.isNull(state[id])) {
        state[id] = action.payload;
      }
    },
    removeFromWishList: (
      state: TWishList,
      action: PayloadAction<IRemoveItemPayload>,
    ) => {
      delete state[action.payload.productId];
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice;
