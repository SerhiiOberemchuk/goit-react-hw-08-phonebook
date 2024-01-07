import { createSlice } from '@reduxjs/toolkit';
import { initialStateAuth } from './initialStateAuth';
import { logIn, logOut, refreshUser, singUp } from './operation';

const handlePending = state => {
  state.isRefreshing = true;
};
const handleRejected = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(singUp.pending, handlePending)
      .addCase(singUp.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        // state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(singUp.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, handleRejected);
  },
});
export const authReducer = authSlice.reducer;
