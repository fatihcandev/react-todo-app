import React from 'react';

import { useDarkMode } from '../utils';

import SvgEmptyState from './illustrations/EmptyState';

import styles from '../styles/empty-state.module.scss';

const TodosEmptyState: React.FC = () => {
  const darkMode = useDarkMode();

  return (
    <div className={styles.container}>
      <SvgEmptyState />
      <span className={`${styles.label} ${darkMode && styles.dark}`}>
        You don't have anything to do!
      </span>
    </div>
  );
};

export default TodosEmptyState;
