import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {COLORS} from 'utils';

export const EditPen = () => {
  return (
    <Svg viewBox="0 0 256 256" style={{height: 20, width: 20}}>
      <Path fill="none" d="M0 0H256V256H0z" />
      <Path
        d="M96 216H48a8 8 0 01-8-8v-44.69a8 8 0 012.34-5.65L165.66 34.34a8 8 0 0111.31 0L221.66 79a8 8 0 010 11.31z"
        fill="none"
        stroke={COLORS.BLACK}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path fill="none" stroke={COLORS.BLACK} strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} d="M216 216L96 216" />
      <Path fill="none" stroke={COLORS.BLACK} strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} d="M136 64L192 120" />
    </Svg>
  );
};
