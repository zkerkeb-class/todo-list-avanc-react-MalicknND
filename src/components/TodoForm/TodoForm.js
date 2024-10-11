import React, {useState} from 'react';
import './todoform.css';

const TodoForm = ({addTask}) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTask(newTask);
    setNewTask(''); // Réinitialiser le champ de saisie après la soumission
    console.log('Nouvelle tâche:', newTask);
  };

  return (
    <div className="todo-form">
      {' '}
      {/* Ajout de la classe todo-form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Nouvelle Tâche"
        />
        <button type="submit">Ajouter</button>{' '}
      </form>
    </div>
  );
};

export default TodoForm;
