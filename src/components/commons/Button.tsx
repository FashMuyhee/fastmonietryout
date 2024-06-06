import {TouchableNativeFeedback, StyleSheet, ActivityIndicator, View} from 'react-native';
import React from 'react';
import {ButtonProps} from './types';
import {COLORS} from 'utils';
import {Text} from './Text';

export const Button = ({onPress, text, isLoading}: ButtonProps) => {
  return (
    <TouchableNativeFeedback onPress={onPress} disabled={isLoading}>
      <View style={styles.wrapper}>
        {isLoading && <ActivityIndicator size="small" color={COLORS.WHITE} />}
        <Text textAlign="center" fontSize={16} isBold>
          {isLoading ? 'Loading' : text}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 45,
    width: '100%',
    borderRadius: 5,
    backgroundColor: COLORS.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    justifyContent: 'center',
  },
});
