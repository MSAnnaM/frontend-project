import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const BASE_URL = 'https://api-server-c4rg.onrender.com/api';
const BASE_URL = 'http://localhost:3005/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    const localStorageData = localStorage.getItem('persist:token');
    if (localStorageData) {
      const token = JSON.parse(localStorageData).token.replace(/"/g, '');
      console.log(token);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (columnId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/cards/${columnId}`);
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
      const response = await api.post(`/cards/${cardData.columnId}`, cardData);
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
      const response = await axios.put(`/cards/${cardData.id}`, cardData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async (cardId, thunkAPI) => {
    try {
      const { data } = await api.delete(`/cards/${cardId}`);
      return data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
