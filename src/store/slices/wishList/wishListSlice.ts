import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartProduct } from '@/types';
import { Utils } from '@/utils/Utils';
import { addToCart, IRemoveItemPayload } from '@/store/slices';

export type TWishList = Record<number, ICartProduct>;

export interface IWishListState {
  products: TWishList;
  total: number;
}

const initialState: IWishListState = {
  products: {},
  total: 0,
};

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (
      state: IWishListState,
      action: PayloadAction<ICartProduct>,
    ) => {
      const { id } = action.payload;

      state.products[id] = action.payload;
      state.total += 1;
    },
    removeFromWishList: (
      state: IWishListState,
      action: PayloadAction<IRemoveItemPayload>,
    ) => {
      state.total = state.total > 0 ? state.total - 1 : 0;
      delete state.products[action.payload.productId];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(addToCart, (state: IWishListState, action) => {
      if (Utils.isNotNull(state.products[action.payload.id])) {
        state.total = state.total > 0 ? state.total - 1 : 0;
        delete state.products[action.payload.id];
      }
    });
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice;
