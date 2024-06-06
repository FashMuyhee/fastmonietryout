import {Dimensions, Platform} from 'react-native';

/**
 *  default fonts
 */
export const FONTS = {
  REGULAR: 'DMSans-Regular',
  BOLD: 'DMSans-Bold',
};

/**
 * COLORS LIST
 */
export const COLORS = {
  PRIMARY: '#cdeb40',
  WHITE: '#FFF',
  OFF_WHITE: '#F4F4F4',
  BLACK: '#2d2d2d',
  RED: '#f44336',
  GREY: '#B6B6B6',
  BLUE: '#0000EE',
};

export const SCREEN_PADDING = 15;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

export const KEYBOARD_BEHAVIOR = 'padding';
export const IS_ANDROID = Platform.OS == 'android';
