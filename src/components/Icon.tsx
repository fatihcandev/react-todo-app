import React from 'react';
import * as Icons from './icons';

interface IIconProps {
  type: 'check' | 'cross' | 'moon' | 'sun';
}

const Icon: React.FC<IIconProps> = ({ type }) => {
  switch (type) {
    case 'check':
      return <Icons.Check />;
    case 'cross':
      return <Icons.Cross />;
    case 'sun':
      return <Icons.Sun />;
    case 'moon':
      return <Icons.Moon />;
    default:
      return null;
  }
};

export default Icon;
