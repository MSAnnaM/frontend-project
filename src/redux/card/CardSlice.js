import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: {
    title: '',
    description: '',
    priority: '',
    deadline: '',
  },
  isLoading: false,
  error: null,
};

const addCardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards = action.payload;
    },
    editCard(state, action) {
      const { cardId, updatedCard } = action.payload;
      state.cards[cardId] = { ...state.cards[cardId], ...updatedCard };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCards.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editCard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addCard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addCard, editCard, fetchCards } = addCardSlice.actions;
export default addCardSlice.reducer;
