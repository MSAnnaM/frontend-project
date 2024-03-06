import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const addCard = createAsyncThunk(
  'card/addCard',
  async (cardData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/card', cardData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'card/editCard',
  async (cardData, { rejectWithValue }) => {
    try {
      const response = await axios.put(`boards/${cardData._id}`, cardData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'card/deleteCard',
  async (_id, { rejectWithValue }) => {
    try {
      await axios.delete(`card/${_id}`);
      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);