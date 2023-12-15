import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart, ICartProduct } from '@/types';
import { Utils } from '@/utils/Utils';

export interface IRemoveItemPayload {
  productId: number;
}

export interface IUpdateQuantityPayload extends IRemoveItemPayload {
  quantity: number;
  increase: boolean;
}

const initialState: ICart = {
  discountedTotal: 0,
  id: 0,
  products: {},
  total: 0,
  totalProducts: 0,
  totalQuantity: 0,
  userId: 0,
  currency: 'EUR',
};

//@see: https://redux.js.org/style-guide/#do-not-put-non-serializable-values-in-state-or-actions
export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (state: ICart, action: PayloadAction<ICartProduct>) => {
      if (Utils.isNull(state.products[action.payload.id])) {
        state.products[action.payload.id] = action.payload;
        state.total += 1;
        state.totalQuantity += 1;
        state.totalProducts += 1;

        // TODO Fix it!
        state.discountedTotal +=
          // @ts-ignore
          state.products[action.payload.id].discountedPrice;
      }
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
});

export const { addToCart, removeFromCart, updateQuantity } =
  shoppingCartSlice.actions;
export default shoppingCartSlice;
