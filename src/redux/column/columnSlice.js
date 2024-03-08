import { createSlice } from '@reduxjs/toolkit';
import {
  addColumn,
  deleteColumn,
  getBoardById,
  updateColumnById,
} from './columnApi';
import { Notify } from 'notiflix';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  Notify.warning(`Something went wrong`);
};

const handleFulfilledAddColumn = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  payload.cards = [];
  state.shownBoard.columns.push(payload);
  Notify.success(`Column added`);
};

const handleFulfilledUpdateColumnById = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const array = state.shownBoard.columns;
  const columnIndex = array.findIndex(el => el._id === payload._id);
  if (columnIndex !== -1) {
    array[columnIndex].title = payload.title;
  }
  Notify.success(`Column updated`);
};

const handleFulfilledDeleteColumn = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.shownBoard.columns = state.shownBoard.columns.filter(
    ({ _id }) => _id !== payload
  );
  Notify.success(`Column deleted`);
};

const handleFulfilledGetBoardById = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  if (payload.columns.length && payload.columns[0]._id) {
    state.shownBoard = payload;
  } else {
    state.shownBoard = payload;
    state.shownBoard.columns = [];
  }
};

const initialState = {
  shownBoard: {
    columns: [],
  },
  isLoading: false,
  error: null,
};

const columnsSlice = createSlice({
  name: 'columns',
  initialState,

  reducers: {
    showBoard(state) {
      state.shownBoard = {
        columns: [],
        backgroundURL: '',
      };
    },
  },

  extraReducers: builder =>
    builder
      .addCase(addColumn.fulfilled, handleFulfilledAddColumn)
      .addCase(deleteColumn.fulfilled, handleFulfilledDeleteColumn)
      .addCase(updateColumnById.fulfilled, handleFulfilledUpdateColumnById)
      .addCase(getBoardById.fulfilled, handleFulfilledGetBoardById)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected),
});

export const columnsReducer = columnsSlice.reducer;
export const { showBoard } = columnsSlice.actions;
