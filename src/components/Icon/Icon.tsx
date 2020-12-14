import React from 'react';

import { IconName } from '../../types';

import * as Icons from '../icons';

import { Check } from '../icons/Check';

interface IIconProps {
  icon: string;
}

const Icon: React.FC<IIconProps> = ({ icon }) => {
  switch (icon) {
    case IconName.check:
      return <Check />;
    case IconName.cross:
      return <Icons.Cross />;
    case IconName.sun:
      return <Icons.Sun />;
    case IconName.moon:
      return <Icons.Moon />;
    default:
      return null;
  }
};

export default Icon;
