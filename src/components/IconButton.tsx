import React from 'react';

import Icon from './Icon';

import '../styles/icon-button.scss';

interface IIconButtonProps {
  icon: string;
  onClick: () => void;
}

const IconButton: React.FC<IIconButtonProps> = ({ icon, onClick }) => {
  return (
    <button {...{ onClick }} className="icon-button">
      <Icon {...{ icon }} />
    </button>
  );
};

export default IconButton;
