import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage';
import modalReducer from './modal/modalSlice';
import { registrationReducer } from './user/userSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const auth = persistReducer(
  {
    key: 'root',
    storage,
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    auth,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
