import React from 'react';
import {LockIcon, PasswordIcon, ScreenWrapper, ShieldIcon, TrashIcon} from 'components';
import {OptionTile} from '../component';

export const AccountScreen = () => {
  return (
    <ScreenWrapper noEdges>
      <OptionTile icon={<LockIcon />} title="Privacy" />
      <OptionTile icon={<ShieldIcon />} title="Security" />
      <OptionTile icon={<PasswordIcon />} title="Change Password" />
      <OptionTile icon={<TrashIcon />} title="Delete Account" />
    </ScreenWrapper>
  );
};
