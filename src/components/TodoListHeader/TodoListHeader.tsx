import React from 'react';

import { AppContext, TOGGLE_DARK_MODE } from '../../context';
import { useDarkMode } from '../../utils';

import { IconButton } from '../IconButton';

import styles from './TodoListHeader.module.scss';

const TodoListHeader: React.FC = () => {
  const { dispatch } = React.useContext(AppContext);
  const darkMode = useDarkMode();

  const handleDarkModeToggle = () => {
    localStorage.setItem('darkMode', `${!darkMode}`);
    dispatch({
      type: TOGGLE_DARK_MODE,
      data: {
        darkMode: !darkMode,
      },
    });
  };
  return (
    <div className={styles.container}>
      <span className={styles.label}>TODO</span>
      <IconButton
        icon={darkMode ? 'moon' : 'sun'}
        onClick={handleDarkModeToggle}
        ariaLabel="toggle dark mode"
      />
    </div>
  );
};
export default TodoListHeader;
