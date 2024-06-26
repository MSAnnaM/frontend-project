import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
  updateUser,
  updateUserTheme,
} from './userApi';

const handleFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user.name = payload.user.name;
  state.user.email = payload.user.email;
  state.user.theme = payload.user.theme;
  state.isLoggedIn = true;
  localStorage.setItem('password', state.password);
};

const logoutFulfilled = state => {
  state.token = null;
  state.user = { name: null, email: null, avatarURL: null, theme: 'dark' };
  state.isLoggedIn = false;
  localStorage.removeItem('password');
};

const refreshFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user.name = payload.name;
  state.user.email = payload.email;
  state.user.theme = payload.theme;
  state.user.avatarUrl = payload.avatarUrl
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const updateFulfilled = (state, action) => {
  state.user = action.payload.user;
};

const updateTheme = (state, action) => {
  state.user.theme = action.payload;
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    user: {
      name: null,
      email: null,
      avatarUrl: null,
      theme: 'dark',
    },
    password: localStorage.getItem('password') || null,
    token: null,
    isLoading: false,
    isRefreshing: false,
    isLoggedIn: false,
  },
  reducers: {
    setPassword: (state, action) => {
      state.password = action.payload;
      localStorage.setItem('password', action.payload);
    },
    updateUserField: (state, action) => {
      const { name, value } = action.payload;
      state.user = { ...state.user, [name]: value };
    },
    updateUserImage: (state, action) => {
      state.user.avatarUrl = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, handleFulfilled)
      .addCase(loginUser.fulfilled, handleFulfilled)
      .addCase(logoutUser.fulfilled, logoutFulfilled)
      .addCase(updateUser.fulfilled, updateFulfilled)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, refreshFulfilled)
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateUserTheme.fulfilled, updateTheme);
  },
});

export const { updateUserField, updateUserImage, setPassword } =
  registrationSlice.actions;

export const registrationReducer = registrationSlice.reducer;
