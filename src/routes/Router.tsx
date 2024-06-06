import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './Auth';
import {useAppSelector} from 'redux-store';

export const Router = () => {
  const {isAuthenticated, user} = useAppSelector(state => state.auth);

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
