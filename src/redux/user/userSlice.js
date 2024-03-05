import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, refreshUser, updateUser } from './userApi';

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

const updateFulfilled = (state, action, payload) => {
  state.user = action.payload;
  // state.user.avatarURL = action.payload;
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    user: {
      name: null,
      email: null,
      password: null,
      avatarURL: '',
      theme: 'dark',
    },
    token: null,
    isLoading: false,
    isRefreshing: false,
    isLoggedIn: false,
  },
  // reducers: {
  //   updateUserField: (state, action) => {
  //     const { name, value } = action.payload;
  //     state.user[name] = value;
  //   },
  //   updateUserImage: (state, action) => {
  //     state.user.avatarURL = action.payload;
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, handleFulfilled)
      .addCase(loginUser.fulfilled, handleFulfilled)
      .addCase(logoutUser.fulfilled, logoutFulfilld)
      .addCase(updateUser.fulfilled, updateFulfilled)
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

// export const { updateUserField, updateUserImage } = registrationSlice.actions;

export const registrationReducer = registrationSlice.reducer;
