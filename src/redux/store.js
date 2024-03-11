import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import { authReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage';
import modalReducer from './modal/modalSlice';
import { registrationReducer } from './user/userSlice';
import boardsReducer from './board/boardSlice';
import { columnsReducer } from './column/columnSlice';
import cardsReducer from './card/CardSlice';
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
import { filterReducer } from './column/filterSlice';

const auth = persistReducer(
  {
    key: 'root',
    storage,
  },
  registrationReducer
);
const registration = persistReducer(
  {
    key: 'token',
    storage,
    whitelist: ['token'],
  },
  registrationReducer
);

export const store = configureStore({
  reducer: {
    registration,
    auth,
    modal: modalReducer,
    boards: boardsReducer,
    columns: columnsReducer,
    filter: filterReducer,
    cards: cardsReducer,
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
