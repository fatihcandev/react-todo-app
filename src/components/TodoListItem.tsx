import React from 'react';

import { useDarkMode } from '../utils';

import Checkbox from './Checkbox';
import IconButton from './IconButton';

import styles from '../styles/todo-list-item.module.scss';

interface ITodoListItemProps {
  id: string;
  label: string;
  completed: boolean;
  removed: boolean;
  onCompleteClick: (id: string, completed: boolean) => void;
  onRemoveClick: (id: string) => void;
}

const TodoListItem: React.FC<ITodoListItemProps> = ({
  id,
  label,
  completed,
  removed,
  onCompleteClick,
  onRemoveClick,
}) => {
  const darkMode = useDarkMode();

  return (
    <div className={`${styles.container} ${darkMode && styles.dark} ${removed && styles.fadeAway}`}>
      <Checkbox checked={completed} onChange={completed => onCompleteClick(id, completed)} />
      <span className={`${styles.label} ${completed && styles.completed}`}>{label}</span>
      <div className={styles.deleteIcon}>
        <IconButton icon="cross" onClick={() => onRemoveClick(id)} ariaLabel="remove todo item" />
      </div>
    </div>
  );
};

export default TodoListItem;
