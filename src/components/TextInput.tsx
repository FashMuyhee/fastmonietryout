import React from 'react';
import {TextInput as RNTextInput, View} from 'react-native';
import {TextInputProps} from './types';
import {COLORS, FONTS} from '../utils';
import {Text} from './Text';

export const TextInput = React.forwardRef<RNTextInput, TextInputProps>((props, ref) => {
  const {
    keyboardType = 'default',
    returnKeyType = 'next',
    placeholder,
    value,
    secureText,
    errorMessage,
    mb = 15,
    onChangeText,
    disabled,
    rightIcon,
  } = props;

  const [isFocus, setIsFocus] = React.useState(false);

  const getBorderColor = () => {
    let color = COLORS.GREY;

    if (!!errorMessage) {
      color = COLORS.RED;
    } else {
      color = COLORS.GREY;
    }

    if (isFocus) {
      color = COLORS.PRIMARY;
    }
    return color;
  };

  return (
    <View style={{marginBottom: mb, width: '100%'}}>
      <View
        style={{
          borderColor: getBorderColor(),
          justifyContent: 'space-between',
          borderRadius: 4,
          paddingVertical: 3,
          paddingHorizontal: 7,
          borderWidth: 1,
          backgroundColor: COLORS.WHITE,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flexGrow: 1}}>
          <RNTextInput
            ref={ref}
            selectionColor={COLORS.PRIMARY}
            cursorColor={COLORS.BLACK}
            value={value}
            onChangeText={onChangeText}
            style={{
              backgroundColor: 'transparent',
              height: 36,
              fontSize: 14,
              fontFamily: FONTS.REGULAR,
              color: COLORS.BLACK,
              paddingVertical: 0,
              overflow: 'scroll',
              flexWrap: 'wrap',
              textAlign: 'justify',
              textAlignVertical: 'auto',
            }}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            placeholderTextColor={COLORS.GREY}
            placeholder={placeholder}
            numberOfLines={1}
            editable={!disabled}
            textAlignVertical="auto"
            onBlur={() => setIsFocus(false)}
            onFocus={() => setIsFocus(true)}
            secureTextEntry={secureText}
            focusable
            autoCapitalize="none"
          />
        </View>
        {rightIcon && (
          <View style={{height: 30, alignItems: 'center', justifyContent: 'center', minWidth: 30, maxWidth: 50}}>
            {rightIcon}
          </View>
        )}
      </View>
      {Number(errorMessage?.length) > 0 && (
        <Text color={COLORS.RED} fontSize={12}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
});
