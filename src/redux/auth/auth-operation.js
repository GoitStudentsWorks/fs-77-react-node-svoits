import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://drink-master-api.onrender.com';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/signup', credentials);
      console.log(response.data);
      setAuthHeader(response.data.token);
      console.log(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const signIn = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/signin', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const signOut = createAsyncThunk(
  'auth/signout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/signout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const { token } = thunkAPI.getState().auth;

        if (!token) {
            return thunkAPI.rejectWithValue('Not valid token');
        };

        setAuthHeader(token);

        try {
            const res = await axios.get('/users/current');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
    }
  }
);
