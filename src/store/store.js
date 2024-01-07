import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
const rootReducers = combineReducers({
  contact: contactsReducer,
  auth: authReducer,
});
export const store = configureStore({
  // reducer: {
  //   contact: contactsReducer,
  //   auth: authReducer,
  // },
  reducer: rootReducers,
});
