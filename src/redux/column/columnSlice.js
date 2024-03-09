import { createSlice } from '@reduxjs/toolkit';
import {
  getColumns,
  addColumn,
  deleteColumn,
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

const handleFulfilledGetColumns = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.shownBoard.columns = payload;
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
  console.log(payload);
  const columnIndex = array.findIndex(el => el._id === payload._id);
  if (columnIndex !== -1) {
    array[columnIndex].title = payload.title;
  }
  Notify.success(`Column updated`);
};

const handleFulfilledDeleteColumn = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  console.log(payload);
  state.shownBoard.columns = state.shownBoard.columns.filter(
    ({ _id }) => _id !== payload
  );
  Notify.success(`Column deleted`);
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
    setShowBoard(state, action) {
      state.shownBoard = {
        ...action.payload,
        columns: [],
        backgroundURL: '',
      };
    },
  },

  extraReducers: builder =>
    builder
      .addCase(getColumns.fulfilled, handleFulfilledGetColumns)
      .addCase(addColumn.fulfilled, handleFulfilledAddColumn)
      .addCase(deleteColumn.fulfilled, handleFulfilledDeleteColumn)
      .addCase(updateColumnById.fulfilled, handleFulfilledUpdateColumnById)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected),
});

export const columnsReducer = columnsSlice.reducer;
export const { showBoard, setShowBoard } = columnsSlice.actions;
