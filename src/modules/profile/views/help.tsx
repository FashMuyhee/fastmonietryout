import React from 'react';
import {HeadsetIcon, HelpIcon, ListIcon, ScreenWrapper} from 'components';
import {OptionTile} from '../component';

export const HelpScreen = () => {
  return (
    <ScreenWrapper noEdges>
      <OptionTile icon={<HelpIcon />} title="FAQs" />
      <OptionTile icon={<ListIcon />} title="Privacy Policy" />
      <OptionTile icon={<HeadsetIcon />} title="Contact Us" />
    </ScreenWrapper>
  );
};
