import React from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
  onClick: () => void;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ onClick, className, children }) => {
  return (
    <button {...{ onClick }} className={`${styles.container} ${className && className}`}>
      {children}
    </button>
  );
};

export default Button;
