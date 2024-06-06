import React from 'react';
import {ImageIcon, ScreenWrapper, ThemeIcon, TimeIcon} from 'components';
import {OptionTile} from '../component';

export const MessagingScreen = () => {
  return (
    <ScreenWrapper noEdges>
      <OptionTile icon={<TimeIcon />} title="New Private Message" />
      <OptionTile icon={<ImageIcon />} title="Call Ring" />
      <OptionTile icon={<ThemeIcon />} title="New Channel Message" />
    </ScreenWrapper>
  );
};
