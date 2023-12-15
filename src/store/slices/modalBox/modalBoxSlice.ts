import { createSlice } from '@reduxjs/toolkit';

export enum MODAL_BOX {
  SHOW_PRODUCT = 'SHOW_PRODUCT',
}

export interface IModalBox {
  isOpen: boolean;
  type?: MODAL_BOX;
  payload?: any;
}

const initialState: IModalBox = {
  isOpen: false,
  payload: null,
};

export const modalBoxSlice = createSlice({
  name: 'modalBox',
  initialState,
  reducers: {
    openModal: (state: IModalBox, action) => {
      const { type, payload } = action;
      state.isOpen = true;
      state.type = type as MODAL_BOX;
      state.payload = payload;
    },

    closeModal: (state: IModalBox) => {
      state.isOpen = false;
      state.payload = null;
    },
  },
});

export const { openModal, closeModal } = modalBoxSlice.actions;
export default modalBoxSlice;
