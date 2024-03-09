import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: {
    title: '',
    description: '',
    priority: null,
    deadline: null,
  },
};

const addCardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action) {
      state.card = action.payload;
    },
  },
  extraReducers: builder => {
    // builder
    //   .addCase(fetchCards.pending, state => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
    //   .addCase(fetchCards.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.boards = action.payload;
    //   })
    //   .addCase(fetchCards.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   });
  },
});

export const { addCard } = addCardSlice.actions;
export default addCardSlice.reducer;
