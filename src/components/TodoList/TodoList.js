import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './todolist.css';

const TodoList = ({tasks}) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem task={task} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
