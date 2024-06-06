import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {CenterView, Text} from 'components';
import {COLORS} from 'utils';

type Props = {
  title: string;
  subtitle?: string;
  onPress?: () => void;
  icon: React.ReactElement;
};

export const OptionTile = ({subtitle, title, onPress, icon}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={{
        height: !!subtitle ? 65 : 55,
        width: '100%',
        flexDirection: 'row',
        columnGap: 10,
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 6,
        alignItems: 'center',
      }}>
      <CenterView style={{width: 40, height: 40, borderWidth: 1, backgroundColor: COLORS.PRIMARY, borderRadius: 20}}>
        {icon}
      </CenterView>
      <View style={{rowGap: 2}}>
        <Text isBold fontSize={15}>
          {title}
        </Text>
        {subtitle && <Text fontSize={12}>{subtitle}</Text>}
      </View>
    </TouchableOpacity>
  );
};
