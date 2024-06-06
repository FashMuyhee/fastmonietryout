import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './Auth';

export const Router = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
