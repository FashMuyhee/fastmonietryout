import React from 'react';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {ScreenWrapperProps} from './types';
import {COLORS, SCREEN_HEIGHT, SCREEN_PADDING} from 'utils';
import {StatusBar} from 'react-native';

export const ScreenWrapper = ({
  children,
  bg,
  padding = SCREEN_PADDING,
  noEdges = false,
  style,
  barColor = COLORS.PRIMARY,
}: ScreenWrapperProps) => {
  bg = bg ? bg : '#F4F4F4';

  const edges: Edge[] = React.useMemo(() => {
    return noEdges ? [] : ['bottom', 'top'];
  }, [noEdges]);

  return (
    <SafeAreaView
      style={[{backgroundColor: bg, paddingHorizontal: padding, height: SCREEN_HEIGHT, paddingTop: 20}, style]}
      edges={edges}>
      <StatusBar backgroundColor={barColor} barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};
