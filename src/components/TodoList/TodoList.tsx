import React from 'react';

import { ITodo } from '../../types';
import { useDarkMode } from '../../utils';

import { Button } from '../Button';
import { TodoListItem } from '../TodoListItem';

import styles from './TodoList.module.scss';

interface ITodoListProps {
  todos: ITodo[];
  removedTodoId: string;
  onCompleteClick: (id: string, completed: boolean) => void;
  onRemoveClick: (id: string) => void;
  onClearCompletedClick: () => void;
}

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  removedTodoId,
  onCompleteClick,
  onRemoveClick,
  onClearCompletedClick,
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
