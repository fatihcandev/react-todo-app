import React from 'react';

import styles from '../styles/todo-list-container.module.scss';

const TodoListContainer: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default TodoListContainer;
