import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const api = axios.create({
  baseURL: 'http://localhost:3005/api',
});

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/cards/');
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
      const response = await axios.post('/cards', cardData);
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
      const response = await axios.put(`cards/${cardData.id}`, cardData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
