import {createSlice} from '@reduxjs/toolkit';
import {ReduxRootState} from 'redux-store/store';

interface AuthState {
  isAuthenticated: boolean;
  user: null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const {login, logout} = authSlice.actions;
export const selectAuth = (state: ReduxRootState) => state.auth;

export const authReducer = authSlice.reducer;
