import React from 'react';
import './todoitem.css';

function TodoItem({task, index, removeTask, toggleTaskCompletion}) {
  return (
    <div className="wrapper">
      <li className={task.completed ? 'completed' : ''}>
        {task.text}

        <button onClick={() => toggleTaskCompletion(index)}>
          {task.completed ? 'Réinitialiser' : 'Terminer'}
        </button>
        <button onClick={() => removeTask(index)}>Supprimer</button>
      </li>
    </div>
  );
}

export default TodoItem;
