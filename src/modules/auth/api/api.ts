import {httpHandler} from 'utils';
import {ErrorResponse, LoginFormPayload, LoginResponse, RegisterFormPayload, RegisterResponse} from './types';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {login, register, useAppDispatch} from 'redux-store';
import Toast from 'react-native-toast-message';

async function registerUser(form: LoginFormPayload) {
  try {
    const res: AxiosResponse<LoginResponse> = await httpHandler.post('/register', form);
    if (res.data) {
      return res.data;
    }
  } catch (e) {
    const error = e as unknown as AxiosError<ErrorResponse>;
    return error.response?.data;
  }
}

async function createUser(form: RegisterFormPayload) {
  try {
    const registerRes = (await registerUser(form)) as LoginResponse;
    const res: AxiosResponse<RegisterResponse> = await httpHandler.post('/user', form);
    if (res.data) {
      if (registerRes?.token) {
        return {...res.data, token: registerRes.token as string};
      }
    }
  } catch (e) {
    const error = e as unknown as AxiosError<ErrorResponse>;
    return error.response?.data;
  }
}

export function useLogin() {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation<AxiosResponse<LoginResponse>, AxiosError<ErrorResponse>, LoginFormPayload>({
    mutationFn: payload => {
      return httpHandler.post(`/login`, payload);
    },
    onSuccess: ({data}, v) => {
      dispatch(login(data.token));
      queryClient.invalidateQueries({queryKey: ['USER']});
      Toast.show({text1: 'Login Successfully', type: 'success'});
    },
    onError: e => {
      const err = e.response?.data.error;
      if (err) {
        Toast.show({text2: err, text1: 'Error', type: 'error'});
        return;
      }
      Toast.show({text1: 'Error', text2: 'Please Try again', type: 'error'});
    },
  });
}

export function useRegister() {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (payload: RegisterFormPayload) => {
      return createUser(payload);
    },
    onSuccess: data => {
      const {token, ...user} = data as RegisterResponse;
      dispatch(register({token: token, user: user}));
      queryClient.invalidateQueries({queryKey: ['USER']});
      Toast.show({text1: 'Registration Complete', type: 'success'});
    },
    onError: e => {
      Toast.show({text1: 'Error', text2: 'Please Try again', type: 'error'});
    },
  });
}
