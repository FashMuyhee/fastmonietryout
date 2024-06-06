import React from 'react';
import {KeyboardTypeOptions, Pressable, TextInput as RNTextInput, View} from 'react-native';
import {TextInputProps} from './types';
import {COLORS, FONTS} from 'utils';
import {Text} from './Text';
import {EyeCloseIcon, EyeOpenIcon} from 'components/icons';

export const TextInput = (props: TextInputProps) => {
  const {returnKeyType = 'next', placeholder, value, errorMessage, mb = 15, onChangeText, disabled, inputType = 'text'} = props;

  const [isFocus, setIsFocus] = React.useState(false);
  const isPasswordField = inputType == 'password';

  const [isTextVisible, setIsTextVisible] = React.useState(isPasswordField);

  const keyboardType = React.useMemo(() => {
    let options: KeyboardTypeOptions = 'default';

    switch (inputType) {
      case 'email':
        options = 'email-address';
      default:
        options = 'default';
        break;
    }
    return options;
  }, [inputType]);

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

  const onTogglePasswordVisible = React.useCallback(() => {
    setIsTextVisible(prev => !prev);
  }, [isPasswordField]);

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
            secureTextEntry={isTextVisible}
            focusable
            autoCapitalize="none"
          />
        </View>
        {isPasswordField && (
          <Pressable
            onPress={onTogglePasswordVisible}
            style={{
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 30,
              maxWidth: 50,
            }}>
            {isTextVisible ? <EyeCloseIcon /> : <EyeOpenIcon />}
          </Pressable>
        )}
      </View>
      {Number(errorMessage?.length) > 0 && (
        <Text color={COLORS.RED} fontSize={12}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};
