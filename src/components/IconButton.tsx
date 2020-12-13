import React from 'react';

import Icon from './Icon';

import styles from '../styles/icon-button.module.scss';

interface IIconButtonProps {
  icon: string;
  onClick: () => void;
  ariaLabel: string;
}

const IconButton: React.FC<IIconButtonProps> = ({ icon, onClick, ariaLabel }) => {
  return (
    <button {...{ onClick }} className={styles.container} aria-label={ariaLabel}>
      <Icon {...{ icon }} />
    </button>
  );
};

export default IconButton;
