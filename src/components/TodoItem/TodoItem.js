import React from 'react';
import './todoitem.css';

const TodoItem = ({task, index, removeTask}) => {
  return (
    <div className="todo-item">
      <span className="task-text">{task}</span>{' '}
      {/* Afficher le texte de la tâche */}
      <button onClick={() => removeTask(task)}>Supprimer</button>
    </div>
  );
};

export default TodoItem;
