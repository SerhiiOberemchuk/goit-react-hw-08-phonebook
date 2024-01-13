import persistReducer from 'redux-persist/es/persistReducer';
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const rootReducers = combineReducers({
  contact: contactsReducer,
  auth: persistReducer(persistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
