import React from 'react';
import { Button } from '../Button';

import { Icon } from '../Icon';

interface IIconButtonProps {
  icon: string;
  onClick: () => void;
  ariaLabel: string;
}

const IconButton: React.FC<IIconButtonProps> = ({ icon, onClick, ariaLabel }) => {
  return (
    <Button {...{ onClick }} aria-label={ariaLabel}>
      <Icon {...{ icon }} />
    </Button>
  );
};

export default IconButton;
