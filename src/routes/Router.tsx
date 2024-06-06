import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './Auth';
import {useAppSelector} from 'redux-store';
import {ProtectedStack} from './Protected';

export const Router = () => {
  const {isAuthenticated} = useAppSelector(state => state.auth);

  return <NavigationContainer>{isAuthenticated ? <ProtectedStack /> : <AuthStack />}</NavigationContainer>;
};
