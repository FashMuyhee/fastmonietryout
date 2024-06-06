import React from 'react';
import {AccountIcon, BellIcon, ChatIcon, HelpIcon, LogoutIcon, ScreenWrapper, Text} from 'components';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProtectedScreens} from 'routes';
import {logout, useAppDispatch, useAppSelector} from 'redux-store';
import {OptionTile, ProfileCard} from '../component';
import {ScrollView} from 'react-native';

type Props = {
  navigation: StackNavigationProp<ProtectedScreens, 'profile'>;
};

export const ProfileScreen = ({navigation}: Props) => {
  const {token, user} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  return (
    <ScreenWrapper>
      <ProfileCard />
      <ScrollView>
        <OptionTile icon={<AccountIcon />} title="Account" subtitle="Privacy,security,change password ..." />
        <OptionTile icon={<ChatIcon />} title="Messaging" subtitle="Message History, Wallpaper" />
        <OptionTile icon={<BellIcon />} title="Notification" subtitle="Messages, Call tunes & Channels" />
        <OptionTile icon={<HelpIcon />} title="Help" subtitle="FAQs, Privacy Policy & Contact Us" />
        <OptionTile
          icon={<LogoutIcon />}
          title="Logout"
          subtitle="Logout from current profile"
          onPress={() => dispatch(logout())}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};
