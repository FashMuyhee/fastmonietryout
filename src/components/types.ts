import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ButtonProps {
  onPress?: () => void;
  text: string;
  isLoading?: boolean;
}

export interface TextProps {
  children?: string | undefined | React.ReactNode;
  styles?: StyleProp<TextStyle>;
  color?: string;
  isBold?: boolean;
  fontSize?: number;
  textAlign?: TextStyle['textAlign'];
  textTransform?: TextStyle['textTransform'];
  onPress?: () => void;
  truncate?: boolean;
  truncateLength?: number;
  numberLines?: number;
}

export interface ScreenWrapperProps {
  bg?: string;
  children: React.ReactNode;
  padding?: number;
  padded?: boolean;
  noEdges?: boolean;
  style?: StyleProp<ViewStyle>;
}

export interface IconButtonProps {
  icon: React.ReactElement;
  style?: StyleProp<ViewStyle>;
  size?: number;
  onPress?: () => void;
  disabled?: boolean;
  rounded?: boolean;
  bg?: string;
}
