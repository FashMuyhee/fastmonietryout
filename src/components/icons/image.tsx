import React from 'react';
import {Path, Svg} from 'react-native-svg';

export const ImageIcon = () => {
  return (
    <Svg viewBox="0 0 256 256" width={20} height={20}>
      <Path
        d="M224 56v122.06l-39.72-39.72a8 8 0 00-11.31 0L147.31 164l-49.65-49.66a8 8 0 00-11.32 0L32 168.69V56a8 8 0 018-8h176a8 8 0 018 8z"
        opacity={0.2}
      />
      <Path d="M216 40H40a16 16 0 00-16 16v144a16 16 0 0016 16h176a16 16 0 0016-16V56a16 16 0 00-16-16zm0 16v102.75l-26.07-26.06a16 16 0 00-22.63 0l-20 20-44-44a16 16 0 00-22.62 0L40 149.37V56zM40 172l52-52 80 80H40zm176 28h-21.37l-36-36 20-20L216 181.38V200zm-72-100a12 12 0 1112 12 12 12 0 01-12-12z" />
    </Svg>
  );
};
