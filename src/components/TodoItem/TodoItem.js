import React from 'react';
import './todoitem.css';
const TodoItem = ({task, toggleTask, deleteTask}) => {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTask(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </li>
  );
};

export default TodoItem;
