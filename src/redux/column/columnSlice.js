import { createSlice } from '@reduxjs/toolkit';
import {
  getColumns,
  addColumn,
  deleteColumn,
  updateColumnById,
} from './columnApi';
// import { Notify } from 'notiflix';
import {
  addCard,
  deleteCard,
  editCard,
  fetchCards,
  transportCard,
} from '../card/CardApi';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledGetColumns = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.shownBoard.columns = payload;
};

const handleFulfilledGetCards = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  if (payload.length && payload[0]._id) {
    const columnIdx = state.shownBoard.columns.findIndex(
      col => col._id === payload[0].columnId
    );
    if (!state.shownBoard.columns[columnIdx].cards.length)
      state.shownBoard.columns[columnIdx].cards.push(...payload);
  }
};

const handleFulfilledAddColumn = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  payload.cards = [];
  state.shownBoard.columns.push(payload);
  // Notify.success(`Column added`);
};

const handleFulfilledUpdateColumnById = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const array = state.shownBoard.columns;
  console.log(array);
  const columnIndex = array.findIndex(el => el._id === payload._id);
  if (columnIndex !== -1) {
    array[columnIndex].title = payload.title;
  }
  // Notify.success(`Column updated`);
};

const handleFulfilledDeleteColumn = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.shownBoard.columns = state.shownBoard.columns.filter(
    ({ _id }) => _id !== payload
  );
  // Notify.success(`Column deleted`);
};

const handleFulfilledAddCard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const columns = state.shownBoard.columns;
  const columnIdx = columns.findIndex(col => col._id === payload.columnId);
  if (columnIdx !== -1) {
    columns[columnIdx].cards.push(payload);
  }
  // Notify.success(`Card added`);
};

const handleFulfilledEditCard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const columns = state.shownBoard.columns;
  const columnIdx = columns.findIndex(col => col._id === payload.columnId);
  if (columnIdx !== -1) {
    columns[columnIdx].cards = columns[columnIdx].cards.map(card =>
      card._id === payload._id ? (card = payload) : card
    );
  }
  // Notify.success(`Card updated`);
};

const handleFulfilledDeleteCard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const columns = state.shownBoard.columns;
  const columnIdx = columns.findIndex(col => col._id === payload.columnId);
  if (columnIdx !== -1) {
    columns[columnIdx].cards = columns[columnIdx].cards.filter(
      ({ _id }) => _id !== payload._id
    );
  }
  // Notify.success(`Card deleted`);
};

const handleFulfilledTransportCard = (state, { payload }) => {
  console.log(payload);
  state.isLoading = false;
  state.error = null;
  const columns = state.shownBoard.columns;
  const newColumnIdx = columns.findIndex(col => col._id === payload.columnId);
  if (newColumnIdx !== -1) {
    columns[newColumnIdx].cards.push(payload);
  }

  const oldColumnIndex = columns.findIndex(
    col => col._id === payload.oldColumnId
  );
  if (oldColumnIndex !== -1) {
    columns[oldColumnIndex].cards = columns[oldColumnIndex].cards.filter(
      ({ _id }) => _id !== payload._id
    );
  }
  // Notify.success(`Card moved`);
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
      };
    },
    setShowBoard(state, action) {
      state.shownBoard = {
        ...action.payload,
        columns: [],
      };
    },
  },

  extraReducers: builder =>
    builder
      .addCase(addCard.fulfilled, handleFulfilledAddCard)
      .addCase(editCard.fulfilled, handleFulfilledEditCard)
      .addCase(transportCard.fulfilled, handleFulfilledTransportCard)
      .addCase(deleteCard.fulfilled, handleFulfilledDeleteCard)
      .addCase(getColumns.fulfilled, handleFulfilledGetColumns)
      .addCase(fetchCards.fulfilled, handleFulfilledGetCards)
      .addCase(addColumn.fulfilled, handleFulfilledAddColumn)
      .addCase(deleteColumn.fulfilled, handleFulfilledDeleteColumn)
      .addCase(updateColumnById.fulfilled, handleFulfilledUpdateColumnById)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected),
});

export const columnsReducer = columnsSlice.reducer;
export const { showBoard, setShowBoard } = columnsSlice.actions;
