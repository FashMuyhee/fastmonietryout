import React from 'react';
import {ScreenWrapper, Text} from 'components';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProtectedScreens} from 'routes';

type Props = {
  navigation: StackNavigationProp<ProtectedScreens, 'profile'>;
};

export const ProfileScreen = ({navigation}: Props) => {
  return (
    <ScreenWrapper>
      <Text>Profile</Text>
    </ScreenWrapper>
  );
};
