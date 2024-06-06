import React from 'react';
import {Button, ScreenWrapper, TextInput} from 'components';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProtectedScreens} from 'routes';
import {ScrollView} from 'react-native';
import {UpdateProfileFormPayload, useGetUser, useUpdateProfile} from '../api';
import {useForm} from 'hooks';

type Props = {
  navigation: StackNavigationProp<ProtectedScreens, 'update_profile'>;
};

export const UpdateProfileScreen = ({navigation}: Props) => {
  const {isPending, mutate} = useUpdateProfile();
  const {data} = useGetUser();

  const {values, handleSubmit, register, errors} = useForm<UpdateProfileFormPayload>({
    defaultValues: {firstName: data?.first_name as string, lastName: data?.last_name as string},
    validationRule: {firstName: 'string', lastName: 'string'},
  });

  const onSubmit = (v: UpdateProfileFormPayload) => {
    mutate(v, {
      onSuccess: () => {
        navigation.goBack();
      },
    });
  };

  return (
    <ScreenWrapper noEdges>
      <ScrollView keyboardDismissMode="interactive" keyboardShouldPersistTaps="handled" automaticallyAdjustKeyboardInsets>
        <TextInput
          value={values?.firstName}
          onChangeText={v => register({name: 'firstName', value: v})}
          placeholder="First Name"
          mb={20}
          returnKeyType="next"
          errorMessage={errors?.firstName}
        />
        <TextInput
          value={values?.lastName}
          onChangeText={v => register({name: 'lastName', value: v})}
          placeholder="Last Name"
          mb={20}
          returnKeyType="next"
          errorMessage={errors?.lastName}
        />
        <TextInput value={data?.email} placeholder="Email" mb={20} returnKeyType="next" disabled />

        <Button text="Save Changes" isLoading={isPending} onPress={() => handleSubmit(onSubmit)} />
      </ScrollView>
    </ScreenWrapper>
  );
};
