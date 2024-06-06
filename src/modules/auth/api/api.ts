import {httpHandler} from 'utils';
import {ErrorResponse, LoginFormPayload, LoginResponse} from './types';
import {useMutation, useQueries, useQueryClient} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {login, useAppDispatch} from 'redux-store';

async function registerUser(form: LoginFormPayload) {
  try {
    const res = await httpHandler.post('/register', form);
  } catch (error) {}
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
    },
  });
}
