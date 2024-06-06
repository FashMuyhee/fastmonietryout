import axios, {AxiosInstance} from 'axios';
import {store} from 'redux-store';

const BASE_URL = 'https://reqres.in/api';

export let httpHandler: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});

httpHandler.interceptors.request.use(config => {
  config.headers.authorization = store.getState().auth.token;
  return config;
});
