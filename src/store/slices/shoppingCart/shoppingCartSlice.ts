import { addToWishList } from '@/store/slices';
import { ICart, ICartProduct } from '@/types';
import { Utils } from '@/utils/Utils';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IRemoveItemPayload {
  productId: string;
}

export interface IUpdateQuantityPayload extends IRemoveItemPayload {
  quantity: number;
  increase: boolean;
}

const reducerName = 'shoppingCart';
const initialState: ICart = Utils.tryToLoadFromStorage<ICart>(reducerName, {
  discountedTotal: 0,
  _id: '',
  products: {},
  total: 0,
  totalProducts: 0,
  totalQuantity: 0,
  userId: '',
  currency: 'EUR',
});

//@see: https://redux.js.org/style-guide/#do-not-put-non-serializable-values-in-state-or-actions
export const shoppingCartSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    addToCart: (state: ICart, action: PayloadAction<ICartProduct>) => {
      if (Utils.isNull(state.products[action.payload._id])) {
        state.products[action.payload._id] = action.payload;
        state.total += 1;
        state.totalQuantity += 1;
        state.totalProducts += 1;

        // TODO Fix it!
        state.discountedTotal +=
          // @ts-ignore
          state.products[action.payload._id].discountedPrice;
      }
    },
    emptyCart: (state: ICart) => {
      return initialState;
    },
    removeFromCart: (
      state: ICart,
      action: PayloadAction<IRemoveItemPayload>,
    ) => {
      const { productId } = action.payload;
      const product: ICartProduct = state.products[productId];

      state.discountedTotal -= product.total;
      state.total -= product.quantity;
      state.totalProducts -= product.quantity;
      state.totalQuantity -= product.quantity;

      delete state.products[productId];
    },
    updateQuantity: (
      state: ICart,
      action: PayloadAction<IUpdateQuantityPayload>,
    ) => {
      const { quantity, productId, increase } = action.payload;

      const product: ICartProduct = state.products[productId];
      if (Utils.isNotNull(product)) {
        product.quantity = quantity;
        state.totalProducts = quantity;
        state.totalQuantity = quantity;
        product.total = product.price * quantity;

        if (increase && product.discountedPrice) {
          state.total += 1;
          state.discountedTotal += product.discountedPrice;
        }

        if (!increase && product.discountedPrice) {
          state.total -= 1;
          state.discountedTotal -= product.discountedPrice;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToWishList, (state: ICart, action) => {
      const { _id } = action.payload;
      if (Utils.isNotNull(state.products[_id])) {
        const product: ICartProduct = state.products[_id];

        state.discountedTotal -= product.total;
        state.total -= product.quantity;
        state.totalProducts -= product.quantity;
        state.totalQuantity -= product.quantity;

        delete state.products[_id];
      }
    });
  },
});

export const { emptyCart, addToCart, removeFromCart, updateQuantity } =
  shoppingCartSlice.actions;
export default shoppingCartSlice;
