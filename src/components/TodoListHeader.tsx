import React from 'react';

import { AppContext, DISABLE_DARK_MODE, ENABLE_DARK_MODE } from '../context';

import IconButton from './IconButton';

import styles from '../styles/todo-list-header.module.scss';

const TodoListHeader: React.FC = () => {
  const { dispatch, state } = React.useContext(AppContext);
  const { darkMode } = state;
  const handleDarkModeToggle = () => {
    dispatch({ type: darkMode ? DISABLE_DARK_MODE : ENABLE_DARK_MODE });
  };
  return (
    <div className={styles.container}>
      <span className={styles.label}>TODO</span>
      <IconButton icon={darkMode ? 'moon' : 'sun'} onClick={handleDarkModeToggle} />
    </div>
  );
};
export default TodoListHeader;
