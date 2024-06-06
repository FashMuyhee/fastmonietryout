import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {COLORS, SCREEN_PADDING} from 'utils';

type Props = {
  children: React.ReactNode;
};

export const AuthWrapper = ({children}: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.OFF_WHITE} />
      <ScrollView
        style={{flex: 1, paddingHorizontal: SCREEN_PADDING}}
        bounces={false}
        automaticallyAdjustKeyboardInsets
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled">
        <View
          style={{
            alignSelf: 'center',
            width: 100,
            height: 100,
            borderRadius: 25,
            backgroundColor: COLORS.OFF_WHITE,
            marginTop: '25%',
            marginBottom: 10,
          }}
        />
        {children}
      </ScrollView>
    </>
  );
};
