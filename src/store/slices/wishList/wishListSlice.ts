import { addToCart, IRemoveItemPayload } from '@/store/slices';
import { ICartProduct } from '@/types';
import { Utils } from '@/utils/Utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TWishList = Record<string, ICartProduct>;

export interface IWishListState {
  products: TWishList;
  total: number;
}

const reducerName = 'wishList';
const initialState: IWishListState = Utils.tryToLoadFromStorage<IWishListState>(
  reducerName,
  {
    products: {},
    total: 0,
  },
);

export const wishListSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    addToWishList: (
      state: IWishListState,
      action: PayloadAction<ICartProduct>,
    ) => {
      const { _id } = action.payload;

      state.products[_id] = action.payload;
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
      if (Utils.isNotNull(state.products[action.payload._id])) {
        state.total = state.total > 0 ? state.total - 1 : 0;
        delete state.products[action.payload._id];
      }
    });
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice;
