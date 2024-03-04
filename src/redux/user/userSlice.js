import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, refreshUser } from './userApi';

const handleFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
  state.isLoggedIn = true;
};
const logoutFulfilld = (state, { payload }) => {
  state.token = null;
  state.user = { name: null, email: null };
  state.isLoggedIn = false;
};

const refreshFulfilled = (state, action, payload) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    user: { name: null, email: null, avatarURL: '', theme: 'dark' },
    token: null,
    isLoading: false,
    isRefreshing: false,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, handleFulfilled)
      .addCase(loginUser.fulfilled, handleFulfilled)
      .addCase(logoutUser.fulfilled, logoutFulfilld)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, refreshFulfilled)
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
    // .addCase(updateUser.fulfilled, (state, action) => {
    //   handleFulfilled(state, action.payload);
    // });
  },
});
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: null,
      email: null,
      password: null,
      avatarURL: '',
      theme: 'dark',
    },
  },
  reducers: {
    updateUserField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    updateUserImage: (state, action) => {
      state.avatarURL = action.payload;
    },
  },
});

export const { updateUserField, updateUserImage } = userSlice.actions;
export default userSlice.reducer;
export const registrationReducer = registrationSlice.reducer;
