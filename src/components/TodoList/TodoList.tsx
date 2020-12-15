import React from 'react';

import { ITodo, TodoStatus } from '../../types';
import { useDarkMode } from '../../utils';

import { Button } from '../Button';
import { Filter } from '../Filter';
import { TodoListItem } from '../TodoListItem';

import styles from './TodoList.module.scss';

interface ITodoListProps {
  todos: ITodo[];
  removedTodoId: string;
  selectedFilter: TodoStatus;
  onCompleteClick: (id: string, completed: boolean) => void;
  onRemoveClick: (id: string) => void;
  onClearCompletedClick: () => void;
  onFilterAll: () => void;
  onFilterActive: () => void;
  onFilterCompleted: () => void;
}

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  removedTodoId,
  selectedFilter,
  onCompleteClick,
  onRemoveClick,
  onClearCompletedClick,
  onFilterAll,
  onFilterActive,
  onFilterCompleted,
}) => {
  const darkMode = useDarkMode();

  return (
    <div className={`${styles.container} ${darkMode && styles.dark}`}>
      <div className={styles.listContainer}>
        {todos.map(({ id, label, completed }) => (
          <TodoListItem
            key={id}
            {...{ id, label, completed }}
            removed={removedTodoId === id}
            {...{ onCompleteClick, onRemoveClick }}
          />
        ))}
      </div>
      <div className={`${styles.bottomSection} ${darkMode && styles.dark}`}>
        <span className={`${styles.amount} ${darkMode && styles.dark}`}>
          {todos.filter(todo => !todo.completed).length} items left
        </span>
        <div className={styles.filterSection}>
          <Filter {...{ onFilterAll, onFilterActive, onFilterCompleted, selectedFilter }} />
        </div>
        <Button
          onClick={onClearCompletedClick}
          className={`${styles.clear} ${darkMode && styles.dark}`}
        >
          Clear completed
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
