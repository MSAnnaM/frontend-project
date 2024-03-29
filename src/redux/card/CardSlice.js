import { createSlice } from '@reduxjs/toolkit';
import {
  addCard,
  deleteCard,
  editCard,
  // fetchCards
} from './CardApi';

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

const cardSlice = createSlice({
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
      // .addCase(fetchCards.pending, state => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      // .addCase(fetchCards.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.cards.push(...action.payload);
      // })
      // .addCase(fetchCards.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      .addCase(editCard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editCard.rejected, (state, action) => {
        state.isLoading = false;
        // state.error = action.payload;
      })
      .addCase(addCard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteCard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.isLoading = false;

        // state.cards = state.cards.filter(card => card.id !== action.payload);
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const cardsReducer = cardSlice.actions;
export default cardSlice.reducer;
