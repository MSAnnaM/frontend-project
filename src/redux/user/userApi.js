import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

export const api = axios.create({
  baseURL: 'https://api-server-c4rg.onrender.com/api',
  // baseURL: 'https://localhost:3005/api',
});

const setToken = token => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const offToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

const registration = async user => {
  const { data } = await api.post(`/users/register`, user);
  setToken(data.token);
  return data;
};

const login = async user => {
  const { data } = await api.post(`/users/login`, user);
  setToken(data.token);
  return data;
};

const logout = async user => {
  const { data } = await api.post(`/users/logout`, user);
  offToken();
  return data;
};

const refresh = async () => {
  const { data } = await api.get(`/users/current`);
  return data;
};

const update = async user => {
  const { data } = await api.patch(`/users/update`, user);
  return data;
};

const sendEmail = async user => {
  const { data } = await api.post(`/users/help`, user);
  return data;
};

const updateTheme = async theme => {
  const { data } = await api.patch(`/users/current/theme`, { theme });

  return data;
};

export const registerUser = createAsyncThunk(
  'authorization/register',
  async (user, thunkAPI) => {
    try {
      const response = await registration(user);
      return response;
    } catch (error) {
      Notiflix.Notify.warning('Oooops, something goes wrong');
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const loginUser = createAsyncThunk(
  'authorization/login',
  async (user, thunkAPI) => {
    try {
      const response = await login(user);
      return response;
    } catch (error) {
      Notiflix.Notify.warning('Oooops, something goes wrong');
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const logoutUser = createAsyncThunk(
  'authorization/logout',
  async (user, thunkAPI) => {
    try {
      const response = await logout(user);
      return response;
    } catch (error) {
      Notiflix.Notify.warning('Oooops, something goes wrong');
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'authorization/refresh',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const savedToken = state.registration.token;

      if (!savedToken) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      setToken(savedToken);
      const response = await refresh();
      return response;
    } catch (error) {
      Notiflix.Notify.warning('Oooops, something goes wrong');
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  'authorization/update',
  async (user, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const savedToken = state.registration.token;

      if (!savedToken) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      setToken(savedToken);

      const response = await update(user);
      console.log(response);
      return response;
    } catch (error) {
      Notiflix.Notify.warning('Oooops, something goes wrong');
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const sendHelpEmail = createAsyncThunk(
  'authorization/help',
  async (user, thunkAPI) => {
    try {
      const response = await sendEmail(user);
      return response;
    } catch (error) {
      Notiflix.Notify.warning('Oooops, something goes wrong');
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUserTheme = createAsyncThunk(
  'authorization/theme',
  async (theme, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const savedToken = state.registration.token;

      if (!savedToken) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      setToken(savedToken);

      const response = await updateTheme(theme);

      return response.theme;
    } catch (error) {
      Notiflix.Notify.warning('Oooops, something goes wrong');
      thunkAPI.rejectWithValue(error);
    }
  }
);
