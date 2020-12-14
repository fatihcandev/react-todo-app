import React from 'react';

import { ITodo } from '../../types';
import { useDarkMode } from '../../utils';

import { TodoListItem } from '../TodoListItem';

import styles from './TodoList.module.scss';

interface ITodoListProps {
  todos: ITodo[];
  removedTodoId: string;
  onCompleteClick: (id: string, completed: boolean) => void;
  onRemoveClick: (id: string) => void;
}

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  removedTodoId,
  onCompleteClick,
  onRemoveClick,
}) => {
  const darkMode = useDarkMode();

  return (
    <div className={`${styles.container} ${darkMode && styles.dark}`}>
      {todos.map(({ id, label, completed }) => (
        <TodoListItem
          key={id}
          {...{ id, label, completed }}
          removed={removedTodoId === id}
          {...{ onCompleteClick, onRemoveClick }}
        />
      ))}
    </div>
  );
};

export default TodoList;
