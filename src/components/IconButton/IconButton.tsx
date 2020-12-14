import React from 'react';
import { Button } from '../Button';

import { Icon } from '../Icon';

import styles from './IconButton.module.scss';

interface IIconButtonProps {
  icon: string;
  onClick: () => void;
  ariaLabel: string;
}

const IconButton: React.FC<IIconButtonProps> = ({ icon, onClick, ariaLabel }) => {
  return (
    <Button {...{ onClick }} aria-label={ariaLabel} className={styles.container}>
      <Icon {...{ icon }} />
    </Button>
  );
};

export default IconButton;
