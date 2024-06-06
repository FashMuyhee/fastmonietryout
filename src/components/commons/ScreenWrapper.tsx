import React from 'react';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {ScreenWrapperProps} from './types';
import {SCREEN_HEIGHT, SCREEN_PADDING} from 'utils';

export const ScreenWrapper = ({children, bg, padding = SCREEN_PADDING, noEdges = false, style}: ScreenWrapperProps) => {
  bg = bg ? bg : '#F4F4F4';

  const edges: Edge[] = React.useMemo(() => {
    return noEdges ? [] : ['bottom', 'top'];
  }, [noEdges]);

  return (
    <SafeAreaView
      style={[{backgroundColor: bg, paddingHorizontal: padding, height: SCREEN_HEIGHT, paddingTop: 20}, style]}
      edges={edges}>
      {children}
    </SafeAreaView>
  );
};
