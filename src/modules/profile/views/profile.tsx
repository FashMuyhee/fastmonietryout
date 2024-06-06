import React from 'react';
import {AccountIcon, BellIcon, ChatIcon, HelpIcon, LogoutIcon, ScreenWrapper} from 'components';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProtectedScreens} from 'routes';
import {logout, useAppDispatch} from 'redux-store';
import {OptionTile, ProfileCard} from '../component';
import {ScrollView} from 'react-native';
import {useQueryClient} from '@tanstack/react-query';

type Props = {
  navigation: StackNavigationProp<ProtectedScreens, 'profile'>;
};

export const ProfileScreen = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const onLogout = () => {
    queryClient.clear();
    dispatch(logout());
  };

  return (
    <ScreenWrapper>
      <ProfileCard />
      <ScrollView bounces={false}>
        <OptionTile icon={<AccountIcon />} title="Account" subtitle="Privacy,security,change password ..." />
        <OptionTile icon={<ChatIcon />} title="Messaging" subtitle="Message History, Wallpaper" />
        <OptionTile icon={<BellIcon />} title="Notification" subtitle="Messages, Call tunes & Channels" />
        <OptionTile icon={<HelpIcon />} title="Help" subtitle="FAQs, Privacy Policy & Contact Us" />
        <OptionTile icon={<LogoutIcon />} title="Logout" subtitle="Logout from current profile" onPress={onLogout} />
      </ScrollView>
    </ScreenWrapper>
  );
};
