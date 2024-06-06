import React from 'react';
import {Circle, Path, Svg} from 'react-native-svg';
import {COLORS} from 'utils';

export const EyeOpenIcon = () => {
  return (
    <Svg viewBox="0 0 256 256" style={{height: 20, width: 20}}>
      <Path fill="none" d="M0 0H256V256H0z" />
      <Path
        d="M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72z"
        fill="none"
        stroke={COLORS.GREY}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Circle
        cx={128}
        cy={128}
        r={40}
        fill="none"
        stroke={COLORS.GREY}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
};
