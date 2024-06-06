import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './reducers';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type ReduxRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
