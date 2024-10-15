import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({tasks, toggleTask, deleteTask}) => {
  return (
    <ul>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
