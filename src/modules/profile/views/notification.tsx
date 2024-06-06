import React from 'react';
import {ScreenWrapper} from 'components';
import {ToggleOptionTile} from '../component';
import {COLORS} from 'utils';

export const NotificationScreen = () => {
  return (
    <ScreenWrapper bg={COLORS.WHITE} noEdges>
      <ToggleOptionTile title="New Private Message" />
      <ToggleOptionTile title="Message Tone" />
      <ToggleOptionTile title="Call Ring" />
      <ToggleOptionTile title="New Channel Message" />
    </ScreenWrapper>
  );
};
