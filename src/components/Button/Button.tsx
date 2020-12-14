import React from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
  onClick: () => void;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ onClick, className, children }) => {
  const [clicked, setClicked] = React.useState<boolean>(false);

  const handleClick = () => {
    setClicked(true);
    onClick();
    setTimeout(() => setClicked(false), 500);
  };

  return (
    <button onClick={handleClick} className={`${styles.container} ${className && className}`}>
      {children}
      {clicked && <span className={styles.ripple} />}
    </button>
  );
};

export default Button;
