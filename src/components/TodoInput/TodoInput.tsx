import React from 'react';

import { ITodo } from '../../types';
import { useDarkMode } from '../../utils';

import styles from './TodoInput.module.scss';

interface ITodoListInputProps {
  onAddTodo: (todo: ITodo) => void;
}

const TodoListInput: React.FC<ITodoListInputProps> = ({ onAddTodo }) => {
  const [value, setValue] = React.useState<string>('');
  const darkMode = useDarkMode();

  const isValid = value.length > 0 ? value.length > 1 : undefined;

  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isValid) {
      const latestId = localStorage.getItem('todoId');
      const id = latestId === null ? '0' : `${Number(latestId) + 1}`;
      const todo = {
        id,
        label: value,
        completed: false,
      };
      localStorage.setItem('todoId', id);
      onAddTodo(todo);
      setValue('');
    }
  };

  return (
    <div
      className={`${styles.container} ${darkMode && styles.dark}  ${
        isValid !== undefined && !isValid && styles.invalid
      }`}
    >
      <input
        {...{ value }}
        type="text"
        name="todo"
        id="todo"
        className={`${styles.input} ${darkMode && styles.dark}`}
        placeholder="Create a new todo..."
        onChange={e => setValue(e.target.value)}
        onKeyPress={handleAddTodo}
      />
    </div>
  );
};

export default TodoListInput;
