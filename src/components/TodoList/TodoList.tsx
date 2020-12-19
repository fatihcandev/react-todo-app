import React from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

import { ITodo, TodoFilter } from '../../types';
import { useDarkMode } from '../../utils';

import { Button } from '../Button';
import { Filter } from '../Filter';
import { TodoListItem } from '../TodoListItem';

import styles from './TodoList.module.scss';

interface ITodoListProps {
  todos: ITodo[];
  removedTodoId: string;
  selectedFilter: TodoFilter;
  onCompleteClick: (id: string, completed: boolean) => void;
  onRemoveClick: (id: string) => void;
  onClearCompletedClick: () => void;
  onFilterAll: () => void;
  onFilterActive: () => void;
  onFilterCompleted: () => void;
  onDragEnd: (result: DropResult) => void;
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
  onDragEnd,
}) => {
  const darkMode = useDarkMode();

  return (
    <div className={`${styles.container} ${darkMode && styles.dark}`}>
      <DragDropContext {...{ onDragEnd }}>
        <Droppable droppableId="todos">
          {provided => (
            <div
              className={styles.listContainer}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {todos.map(({ id, label, completed }, index) => (
                <Draggable key={id} draggableId={id} {...{ index }}>
                  {provided => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={styles.draggableItem}
                    >
                      <TodoListItem
                        key={id}
                        removed={removedTodoId === id}
                        {...{ id, label, completed }}
                        {...{ onCompleteClick, onRemoveClick }}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
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
