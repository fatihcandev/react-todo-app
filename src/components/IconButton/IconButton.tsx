import React from 'react';

import { Icon } from '../Icon';

import styles from './IconButton.module.scss';

interface IIconButtonProps {
  icon: string;
  onClick: () => void;
  ariaLabel: string;
}

const IconButton: React.FC<IIconButtonProps> = ({ icon, onClick, ariaLabel }) => {
  const [clicked, setClicked] = React.useState<boolean>(false);

  const handleClick = () => {
    setClicked(true);
    onClick();
    setTimeout(() => setClicked(false), 500);
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.container} ${clicked && styles.clicked}`}
      aria-label={ariaLabel}
    >
      <Icon {...{ icon }} />
      <span className={styles.ripple} />
    </button>
  );
};

export default IconButton;
