import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ReduxRootState} from 'redux-store/store';

interface AuthState {
  isAuthenticated: boolean;
  user: null;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const {login, logout} = authSlice.actions;
export const selectAuth = (state: ReduxRootState) => state.auth;

export const authReducer = authSlice.reducer;
