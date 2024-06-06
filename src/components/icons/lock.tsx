import React from 'react';
import {Path, Svg} from 'react-native-svg';

export const LockIcon = () => {
  return (
    <Svg viewBox="0 0 256 256" width={20} height={20}>
      <Path d="M128 112a28 28 0 00-8 54.83V184a8 8 0 0016 0v-17.17a28 28 0 00-8-54.83zm0 40a12 12 0 1112-12 12 12 0 01-12 12zm80-72h-32V56a48 48 0 00-96 0v24H48a16 16 0 00-16 16v112a16 16 0 0016 16h160a16 16 0 0016-16V96a16 16 0 00-16-16zM96 56a32 32 0 0164 0v24H96zm112 152H48V96h160v112z" />
    </Svg>
  );
};
