import React from 'react';
import {AccountIcon, BellIcon, ChatIcon, HelpIcon, LogoutIcon, ScreenWrapper} from 'components';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProtectedScreens} from 'routes';
import {logout, useAppDispatch} from 'redux-store';
import {OptionTile, ProfileCard} from '../component';
import {ScrollView} from 'react-native';
import {useQueryClient} from '@tanstack/react-query';
import {COLORS} from 'utils';

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
    <ScreenWrapper barColor={COLORS.OFF_WHITE}>
      <ProfileCard />
      <ScrollView bounces={false}>
        <OptionTile
          icon={<AccountIcon />}
          title="Account"
          subtitle="Privacy,security,change password ..."
          onPress={() => navigation.navigate('account')}
        />
        <OptionTile
          icon={<ChatIcon />}
          title="Messaging"
          subtitle="Message History, Wallpaper"
          onPress={() => navigation.navigate('messaging')}
        />
        <OptionTile
          icon={<BellIcon />}
          title="Notification"
          subtitle="Messages, Call tunes & Channels"
          onPress={() => navigation.navigate('notification')}
        />
        <OptionTile
          icon={<HelpIcon />}
          title="Help"
          subtitle="FAQs, Privacy Policy & Contact Us"
          onPress={() => navigation.navigate('help')}
        />
        <OptionTile icon={<LogoutIcon />} title="Logout" subtitle="Logout from current profile" onPress={onLogout} />
      </ScrollView>
    </ScreenWrapper>
  );
};
