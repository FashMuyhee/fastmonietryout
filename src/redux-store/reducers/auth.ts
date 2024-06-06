import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ReduxRootState} from 'redux-store/store';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  uid: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  uid: '',
};

function extractIdFromToken(token: string) {
  const indexOfX = token.indexOf('X');

  if (indexOfX !== -1) {
    return token[indexOfX + 1];
  } else {
    return '';
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const id = extractIdFromToken(action.payload);
      state.isAuthenticated = true;
      state.token = action.payload;
      state.uid = id;
    },

    logout: state => {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const {login, logout} = authSlice.actions;
export const selectAuth = (state: ReduxRootState) => state.auth;

export const authReducer = authSlice.reducer;
