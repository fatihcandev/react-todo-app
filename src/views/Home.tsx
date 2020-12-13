import React from 'react';

import { Layout, TodoInput, TodoList, TodoListContainer, TodoListHeader } from '../components';
import { ITodo } from '../types';

const Home: React.FC = () => {
  const [todos, setTodos] = React.useState<Set<ITodo>>(new Set());

  const getTodos = React.useCallback(() => {
    const todoList = localStorage.getItem('todos');
    if (todoList !== null) {
      setTodos(new Set(JSON.parse(todoList)));
    }
  }, []);

  React.useEffect(() => {
    getTodos();
  }, [getTodos]);

  const handleAddToDo = (todo: ITodo) => {
    setTodos(prevTodos => prevTodos.add(todo));
    const newTodoList = JSON.stringify(Array.from(todos));
    localStorage.setItem('todos', newTodoList);
    getTodos();
  };

  const handleRemoveTodo = (id: string) => {
    todos.forEach(todo => {
      if (todo.id === id) {
        todos.delete(todo);
      }
    });
    const newTodoList = JSON.stringify(Array.from(todos));
    localStorage.setItem('todos', newTodoList);
    getTodos();
  };

  const handleCompleteTodo = (id: string, completed: boolean) => {
    const todoArr = Array.from(todos);
    const todo = todoArr.find(todo => todo.id === id);
    if (todo) {
      const index = todoArr.indexOf(todo);
      todoArr.splice(index, 1, { ...todo, completed });
      const newTodoList = JSON.stringify(todoArr);
      localStorage.setItem('todos', newTodoList);
      getTodos();
    }
  };

  return (
    <Layout todoAmount={todos.size}>
      <TodoListContainer>
        <TodoListHeader />
        <TodoInput onAddTodo={handleAddToDo} />
        {todos.size > 0 && (
          <TodoList
            todos={Array.from(todos)}
            onCompleteClick={handleCompleteTodo}
            onRemoveClick={handleRemoveTodo}
          />
        )}
      </TodoListContainer>
    </Layout>
  );
};

export default Home;
