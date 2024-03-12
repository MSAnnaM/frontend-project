import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const axiosInstance = axios.create({
  baseURL: 'https://api-server-c4rg.onrender.com/api',
});

axiosInstance.interceptors.request.use(
  config => {
    const localStorageData = localStorage.getItem('persist:token');
    if (localStorageData) {
      const token = JSON.parse(localStorageData).token.replace(/"/g, '');

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
export const fetchBoards = createAsyncThunk(
  'boards/fetchBoards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/boards/');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createBoard = createAsyncThunk(
  'boards/createBoard',
  async (boardData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/boards/', boardData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const editBoard = createAsyncThunk(
  'boards/editBoard',
  async (boardData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/boards/${boardData._id}`,
        boardData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (_id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/boards/${_id}`);
      console.log(_id);
      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
