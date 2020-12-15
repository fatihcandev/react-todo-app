import React from 'react';

import { useDarkMode } from '../../utils';
import { ITodo, TodoStatus } from '../../types';

import { Layout } from '../../components/Layout';
import { TodoListContainer } from '../../components/TodoListContainer';
import { TodoListHeader } from '../../components/TodoListHeader';
import { TodoInput } from '../../components/TodoInput';
import { TodoList } from '../../components/TodoList';
import { Filter } from '../../components/Filter';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  const [todos, setTodos] = React.useState<Set<ITodo>>(new Set());
  const [removedTodoId, setRemovedTodoId] = React.useState<string>('');
  const [selectedFilter, setSelectedFilter] = React.useState<TodoStatus>(TodoStatus.all);
  const [filteredTodos, setFilteredTodos] = React.useState<ITodo[]>([]);
  const darkMode = useDarkMode();

  const getTodos = React.useCallback(() => {
    const todoList = localStorage.getItem('todos');
    if (todoList !== null) {
      setTodos(new Set(JSON.parse(todoList)));
    }
  }, []);

  const refreshTodos = (newTodos: ITodo[]) => {
    const newTodoList = JSON.stringify(newTodos);
    localStorage.setItem('todos', newTodoList);
    getTodos();
  };

  React.useEffect(() => {
    getTodos();
  }, [getTodos]);

  const handleAddToDo = (todo: ITodo) => {
    setTodos(prevTodos => prevTodos.add(todo));
    refreshTodos(Array.from(todos));
  };

  const handleRemoveTodo = (id: string) => {
    setRemovedTodoId(id);
    setTimeout(() => {
      todos.forEach(todo => {
        if (todo.id === id) {
          todos.delete(todo);
        }
      });
      refreshTodos(Array.from(todos));
    }, 500);
  };

  const handleCompleteTodo = (id: string, completed: boolean) => {
    const todoArr = Array.from(todos);
    const todo = todoArr.find(todo => todo.id === id);
    if (todo) {
      const index = todoArr.indexOf(todo);
      todoArr.splice(index, 1, { ...todo, completed });
      refreshTodos(todoArr);
    }
  };

  const handleClearCompleted = () => {
    const filteredTodoArr = Array.from(todos).filter(todo => !todo.completed);
    refreshTodos(filteredTodoArr);
  };

  const handleFilterAll = () => {
    setSelectedFilter(TodoStatus.all);
    setFilteredTodos([]);
  };

  const handleFilterActive = () => {
    setSelectedFilter(TodoStatus.active);
    setFilteredTodos(Array.from(todos).filter(todo => !todo.completed));
  };

  const handleFilterCompleted = () => {
    setSelectedFilter(TodoStatus.completed);
    setFilteredTodos(Array.from(todos).filter(todo => todo.completed));
  };

  return (
    <Layout todoAmount={todos.size}>
      <TodoListContainer>
        <TodoListHeader />
        <TodoInput onAddTodo={handleAddToDo} />
        {todos.size > 0 && (
          <TodoList
            {...{ removedTodoId, selectedFilter }}
            todos={filteredTodos.length > 0 ? filteredTodos : Array.from(todos)}
            onCompleteClick={handleCompleteTodo}
            onRemoveClick={handleRemoveTodo}
            onClearCompletedClick={handleClearCompleted}
            onFilterAll={handleFilterAll}
            onFilterActive={handleFilterActive}
            onFilterCompleted={handleFilterCompleted}
          />
        )}
        <div className={`${styles.filterSection} ${darkMode && styles.dark}`}>
          <Filter
            onFilterAll={handleFilterAll}
            onFilterActive={handleFilterActive}
            onFilterCompleted={handleFilterCompleted}
            {...{ selectedFilter }}
          />
        </div>
      </TodoListContainer>
    </Layout>
  );
};

export default Home;
