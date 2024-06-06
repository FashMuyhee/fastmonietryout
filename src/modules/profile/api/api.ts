import {httpHandler} from 'utils';
import {UpdateProfileFormPayload, User, UserResponse} from './types';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {useAppSelector} from 'redux-store';
import Toast from 'react-native-toast-message';
import {ErrorResponse} from 'modules/auth';

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  const {uid} = useAppSelector(s => s.auth);

  return useMutation<AxiosResponse, AxiosError<ErrorResponse>, UpdateProfileFormPayload>({
    mutationFn: payload => {
      return httpHandler.put(`/users/${uid}`, payload);
    },
    onSuccess: ({data}, v) => {
      queryClient.invalidateQueries({queryKey: ['USER']});
      Toast.show({text1: 'Updated Successfully', type: 'success'});
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

export function useGetUser() {
  const {uid} = useAppSelector(s => s.auth);

  return useQuery<AxiosResponse<UserResponse>, any, User>({
    queryKey: ['USER'],
    queryFn: () => {
      return httpHandler.get(`/users/${uid}`);
    },
    select({data}) {
      const user = data.data;
      return user;
    },
  });
}
