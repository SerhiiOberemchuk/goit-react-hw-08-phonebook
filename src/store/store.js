import persistReducer from 'redux-persist/es/persistReducer';
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const rootReducers = combineReducers({
  contact: contactsReducer,
  auth: persistReducer(persistConfig, authReducer),
  // auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export const persistor = persistStore(store);
