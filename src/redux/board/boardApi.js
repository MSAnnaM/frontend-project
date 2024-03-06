import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const fetchBoards = createAsyncThunk(
  'boards/fetchBoards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/boards');
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
      const response = await axios.put(`boards/${boardData._id}`, boardData);
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
      await axios.delete(`boards/${_id}`);
      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
