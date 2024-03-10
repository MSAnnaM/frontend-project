import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const api = axios.create({
  baseURL: 'https://api-server-c4rg.onrender.com/api',
});

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/cards/');
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addCard = createAsyncThunk(
  'cards/addCard',
  async (cardData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/cards:columnId', cardData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'cards/editCard',
  async (cardData, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`cards/${cardData._id}`, cardData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
