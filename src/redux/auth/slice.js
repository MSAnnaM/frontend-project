// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

// import { register, login, logout, refreshUser } from './operations';

// const operationArr = [register, login, logout, refreshUser];

// const getStatus = status => operationArr.map(el => el[status]);

// const handlePending = state => (state.isRefreshing = true);

// const handleRejected = (state, action) => {
//   toast.error(
//     'Something went wrong with your authentication. Please try again. 🤷‍♀️'
//   );
//   state.error = action.payload;
//   state.token = '';
//   state.isLoggedIn = false;
//   state.isRefreshing = false;
// };

// const initialState = {
//   user: {
//     email: '',
//     name: '',
//     avatarURL: '',
//     password: '',
//     theme: 'dark',
//     displays: '',
//   },
//   error: null,
//   email: '',
//   token: '',
//   comment: '',
//   isLoggedIn: false,
//   isRefreshing: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: builder =>
//     builder
//       .addCase(register.fulfilled, (state, { payload }) => {
//         toast.success('Registration completed successfully. Welcome! 👌');
//         state.user = payload.user;
//         state.token = payload.token;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(login.fulfilled, (state, { payload }) => {
//         toast.success('Glad to have you back. Successful login! 🤩');
//         state.user = payload.user;
//         state.user.avatarURL = payload.user.avatar;
//         state.token = payload.token;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(logout.fulfilled, state => {
//         toast.info('Logout successful. We hope to see you back soon! 😭💙');
//         state.user.email = '';
//         state.user.name = '';
//         state.user.avatarURL = '';
//         state.user.theme = '';
//         state.token = '';
//         state.isLoggedIn = false;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.fulfilled, (state, { payload }) => {
//         state.user = payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addMatcher(isAnyOf(...getStatus('pending')), handlePending)
//       .addMatcher(isAnyOf(...getStatus('rejected')), handleRejected),
// });

// export const authReducer = authSlice.reducer;
