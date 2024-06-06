import React from 'react';
import {Path, Svg} from 'react-native-svg';

export const HelpIcon = () => {
  return (
    <Svg viewBox="0 0 256 256" width={20} height={20}>
      <Path d="M192 96c0 28.51-24.47 52.11-56 55.56V160a8 8 0 01-16 0v-16a8 8 0 018-8c26.47 0 48-17.94 48-40s-21.53-40-48-40-48 17.94-48 40a8 8 0 01-16 0c0-30.88 28.71-56 64-56s64 25.12 64 56zm-64 96a16 16 0 1016 16 16 16 0 00-16-16z" />
    </Svg>
  );
};
