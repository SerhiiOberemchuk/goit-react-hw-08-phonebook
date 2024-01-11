import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
export const singUp = createAsyncThunk(
  'auth/SignUp',
  async (user, thunkAPI) => {
    // console.log(user);
    try {
      const response = await axios.post('/users/signup', user);
      setAuthHeader(response.data.token);

      console.log(response);
      return response.data;
    } catch (error) {
      console.log(JSON.stringify(error.response.data));
      // return error;
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const logIn = createAsyncThunk('auth/LogIn', async (user, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', user);
    setAuthHeader(response.data.token);
    console.log(response);

    return response.data;
  } catch (error) {
    console.log(JSON.stringify(error.message));
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const logOut = createAsyncThunk('auth/LogOut', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    console.log(response);
    clearAuthHeader();

    return response.data;
  } catch (error) {
    console.log(JSON.stringify(error.message));
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    // console.log(state);
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(JSON.stringify(error.message));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
