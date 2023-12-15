import { createSlice } from '@reduxjs/toolkit';
import { ICart } from '@/types';
import { Utils } from '@/utils/Utils';

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
    addToCart: (state: ICart, action) => {
      if (Utils.isNull(state.products[action.payload.id])) {
        state.products[action.payload.id] = action.payload;
        state.total += 1;
      }
    },
    removeFromCart: (state: ICart, action) => {
      const { productId } = action.payload;

      delete state.products[productId];
      state.total -= 1;
    },
    updateQuantity: (state: ICart, action) => {
      const { quantity, productId } = action.payload;

      if (Utils.isNotNull(state.products[productId])) {
        state.products[productId].quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } =
  shoppingCartSlice.actions;
export default shoppingCartSlice;
