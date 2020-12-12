import React from 'react';

import Icon from './Icon';

import styles from '../styles/icon-button.module.scss';

interface IIconButtonProps {
  icon: string;
  onClick: () => void;
}

const IconButton: React.FC<IIconButtonProps> = ({ icon, onClick }) => {
  return (
    <button {...{ onClick }} className={styles.container}>
      <Icon {...{ icon }} />
    </button>
  );
};

export default IconButton;
