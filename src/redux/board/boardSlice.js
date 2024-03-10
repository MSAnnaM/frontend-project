import { createSlice } from '@reduxjs/toolkit';
import { deleteBoard, editBoard, fetchBoards, createBoard } from './boardApi';

const initialState = {
  boards: [
    { _id: 1, name: 'cook dinner', icon: 'icon-puzzle' },
    { _id: 2, name: 'cook dinner', icon: 'icon-puzzle' },
    { _id: 3, name: 'cook dinner', icon: 'icon-puzzle' },
    { _id: 4, name: 'cook dinner', icon: 'icon-puzzle' },
    { _id: 5, name: 'cook dinner', icon: 'icon-puzzle' },
    { _id: 6, name: 'cook dinner', icon: 'icon-puzzle' },
  ],
  isLoading: false,
  error: null,
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBoards.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boards = action.payload;
      })
      .addCase(fetchBoards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editBoard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editBoard.fulfilled, (state, action) => {
        state.isLoading = false;

        state.boards = state.boards.map(board =>
          board.id === action.payload.id ? action.payload : board
        );
      })
      .addCase(editBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteBoard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.isLoading = false;

        state.boards = state.boards.filter(
          board => board.id !== action.payload
        );
      })
      .addCase(deleteBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createBoard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boards.push(action.payload);
      })
      .addCase(createBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { fetchBoardsRequest, fetchBoardsSuccess, fetchBoardsFailure } =
  boardsSlice.actions;

export default boardsSlice.reducer;
