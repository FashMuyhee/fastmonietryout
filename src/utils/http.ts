import axios, {AxiosInstance} from 'axios';

const BASE_URL = 'https://reqres.in/api';

export let httpHandler: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});
