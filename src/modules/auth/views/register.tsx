import React from 'react';
import {Button, Text, TextInput} from 'components';
import {NavigationProp} from '@react-navigation/native';
import {AuthScreens} from 'routes';
import {AuthWrapper} from '../component';
import {COLORS} from 'utils';
import {RegisterFormPayload, useRegister} from '../api';
import {useForm} from 'hooks/useForm';

type Props = {
  navigation: NavigationProp<AuthScreens>;
};

export const RegisterScreen = ({navigation}: Props) => {
  const {isPending, mutate} = useRegister();
  const {values, handleSubmit, register, errors} = useForm<RegisterFormPayload>({
    defaultValues: {firstName: '', email: '', lastName: '', password: ''},
    validationRule: {email: 'email', firstName: 'string', lastName: 'string', password: 'string'},
  });

  const onSubmit = (v: RegisterFormPayload) => {
    mutate(v);
  };

  return (
    <AuthWrapper>
      <Text fontSize={24} isBold textAlign="center" style={{marginTop: '5%'}}>
        Create Profile
      </Text>
      <Text fontSize={14} textAlign="center" style={{marginTop: 5, marginBottom: 30}}>
        Happy to have you onboard 🥳
      </Text>
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
      <TextInput
        value={values?.email}
        onChangeText={v => register({name: 'email', value: v})}
        placeholder="Email"
        mb={20}
        returnKeyType="next"
        errorMessage={errors?.email as string}
      />
      <TextInput
        value={values?.password}
        onChangeText={v => register({name: 'password', value: v})}
        placeholder="Password"
        returnKeyType="done"
        inputType="password"
        errorMessage={errors?.password}
      />
      <Button text="Register" isLoading={isPending} onPress={() => handleSubmit(onSubmit)} />
      <Text onPress={() => navigation.navigate('login')} textAlign="center" style={{marginTop: 20}}>
        Already have an account ? <Text color={COLORS.BLUE}>Login</Text>
      </Text>
    </AuthWrapper>
  );
};
