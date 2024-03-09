import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal1: false,
  modal2: false,
  modal3: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
      state[action.payload] = true;
    },
    closeModal(state, action) {
      const modalKey = action.payload;
      state[modalKey] = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
