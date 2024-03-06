import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  card: {
    title: '',
    description: '',
    priority: null,
    deadline: null,
  },
};

const addCardSlice = createSlice({
  name: 'addCard',
  initialState,
  reducers: {
    addCard(state, action) {
      state.card = action.payload;
    },
  },
});

export const { addCard } = addCardSlice.actions;
export default addCardSlice.reducer;
