import {View, Switch} from 'react-native';
import React from 'react';
import {CenterView, StackView, Text} from 'components';
import {COLORS, IS_ANDROID} from 'utils';

type Props = {
  title: string;
};

export const ToggleOptionTile = ({title}: Props) => {
  return (
    <StackView
      style={{
        height: 55,
        width: '100%',
        flexDirection: 'row',
        columnGap: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.GREY,
        marginBottom: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
      }}>
      <Text style={{flex: 1}} isBold>
        {title}
      </Text>
      <Switch trackColor={{true: IS_ANDROID ? COLORS.OFF_WHITE : COLORS.PRIMARY}} thumbColor={COLORS.PRIMARY} value />
    </StackView>
  );
};
