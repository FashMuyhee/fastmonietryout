import React from 'react';
import {Path, Svg} from 'react-native-svg';
import { COLORS } from 'utils';

export const EyeCloseIcon = () => {
  return (
    <Svg viewBox="0 0 256 256" style={{height: 20, width: 20}}>
      <Path fill="none" d="M0 0H256V256H0z" />
      <Path fill="none" stroke={COLORS.GREY} strokeLinecap="round" strokeLinejoin="round" strokeWidth={12} d="M48 40L208 216" />
      <Path
        d="M154.91 157.6a40 40 0 01-53.82-59.2M135.53 88.71a40 40 0 0132.3 35.53"
        fill="none"
        stroke={COLORS.GREY}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M208.61 169.1C230.41 149.58 240 128 240 128s-32-72-112-72a126 126 0 00-20.68 1.68M74 68.6C33.23 89.24 16 128 16 128s32 72 112 72a118.05 118.05 0 0054-12.6"
        fill="none"
        stroke={COLORS.GREY}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
};
