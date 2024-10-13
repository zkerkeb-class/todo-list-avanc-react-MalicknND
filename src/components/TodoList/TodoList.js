import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({tasks, removeTask, toggleTaskCompletion}) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          removeTask={removeTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
}

export default TodoList;
