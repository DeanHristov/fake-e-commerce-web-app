import { createSlice } from '@reduxjs/toolkit';

export interface IModalBox {
  isOpen: boolean;
}

const initialState: IModalBox = {
  isOpen: false,
};

export const modalBoxSlice = createSlice({
  name: 'modalBox',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },

    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalBoxSlice.actions;
export default modalBoxSlice;
