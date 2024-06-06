import React from 'react';
import {Button, Text, TextInput} from 'components';
import {NavigationProp} from '@react-navigation/native';
import {AuthScreens} from 'routes';
import {AuthWrapper} from '../component';
import {COLORS} from 'utils';
import {LoginFormPayload} from '../api';
import {useForm} from 'hooks';
import {useAppDispatch, login, useAppSelector} from 'redux-store';
// import useForm from '@hooks/useForm';
// import {LoginPayload, useLogin} from '../api';

type Props = {
  navigation: NavigationProp<AuthScreens>;
};

export const LoginScreen = ({navigation}: Props) => {
  // const {post, isLoading} = useLogin();
  const dispatch = useAppDispatch();
  const {isAuthenticated, user} = useAppSelector(state => state.auth);
  console.log("🚀 ~ LoginScreen ~ sAuthenticated, user:", isAuthenticated, user)
  
  const {values, handleSubmit, register, errors} = useForm<LoginFormPayload>({
    defaultValues: {email: '', password: ''},
    validationRule: {email: 'email', password: 'password'},
  });

  const onSubmit = (v: LoginFormPayload) => {
    console.log(v);
    dispatch(login(v));
  };

  return (
    <AuthWrapper>
      <Text fontSize={24} isBold textAlign="center" style={{marginTop: '5%'}}>
        Welcome back 😎
      </Text>
      <Text fontSize={14} textAlign="center" style={{marginTop: 5, marginBottom: 30}}>
        Hello there, login to continue
      </Text>
      <TextInput
        value={values?.email}
        onChangeText={v => register({name: 'email', value: v})}
        errorMessage={errors?.email}
        placeholder="Email"
        mb={20}
        returnKeyType="next"
      />
      <TextInput
        value={values?.password}
        onChangeText={v => register({name: 'password', value: v})}
        errorMessage={errors?.password}
        placeholder="Password"
        inputType="password"
      />
      <Button text="Login" onPress={() => handleSubmit(onSubmit)} />
      <Text onPress={() => navigation.navigate('register')} textAlign="center" style={{marginTop: 20}}>
        Don't have an account ? <Text color={COLORS.BLUE}>Register</Text>
      </Text>
    </AuthWrapper>
  );
};
