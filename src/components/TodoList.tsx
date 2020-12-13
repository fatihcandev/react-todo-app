import React from 'react';

import { ITodo } from '../types';
import { useDarkMode } from '../utils';

import TodoListItem from './TodoListItem';

import styles from '../styles/todo-list.module.scss';

interface ITodoListProps {
  todos: ITodo[];
  onCompleteClick: (id: string, completed: boolean) => void;
  onRemoveClick: (id: string) => void;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, onCompleteClick, onRemoveClick }) => {
  const darkMode = useDarkMode();

  return (
    <div className={`${styles.container} ${darkMode && styles.dark}`}>
      {todos.map(({ id, label, completed }) => (
        <TodoListItem
          key={id}
          {...{ id, label, completed }}
          {...{ onCompleteClick, onRemoveClick }}
        />
      ))}
    </div>
  );
};

export default TodoList;
