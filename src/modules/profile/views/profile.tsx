import React from 'react';
import {ScreenWrapper, Text} from 'components';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProtectedScreens} from 'routes';
import {useAppSelector} from 'redux-store';

type Props = {
  navigation: StackNavigationProp<ProtectedScreens, 'profile'>;
};

export const ProfileScreen = ({navigation}: Props) => {
  const {token, user} = useAppSelector(state => state.auth);
  return (
    <ScreenWrapper>
      <Text>Profile{token}</Text>
      <Text>{JSON.stringify(user)}</Text>
    </ScreenWrapper>
  );
};
