import React from 'react';

import { TodoFilter } from '../../types';
import { useDarkMode } from '../../utils';

import { Button } from '../Button';

import styles from './Filter.module.scss';

interface IFilterProps {
  onFilterAll: () => void;
  onFilterActive: () => void;
  onFilterCompleted: () => void;
  selectedFilter: TodoFilter;
}

const Filter: React.FC<IFilterProps> = ({
  onFilterAll,
  onFilterActive,
  onFilterCompleted,
  selectedFilter,
}) => {
  const darkMode = useDarkMode();
  return (
    <div className={styles.container}>
      <Button
        onClick={onFilterAll}
        className={`${styles.filter} ${darkMode && styles.dark} ${
          selectedFilter === TodoFilter.all && styles.selected
        }`}
      >
        All
      </Button>
      <Button
        onClick={onFilterActive}
        className={`${styles.filter} ${darkMode && styles.dark} ${
          selectedFilter === TodoFilter.active && styles.selected
        }`}
      >
        Active
      </Button>
      <Button
        onClick={onFilterCompleted}
        className={`${styles.filter} ${darkMode && styles.dark} ${
          selectedFilter === TodoFilter.completed && styles.selected
        }`}
      >
        Completed
      </Button>
    </div>
  );
};

export default Filter;
