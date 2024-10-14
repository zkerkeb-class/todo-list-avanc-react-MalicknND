import React from 'react';
import './taskfilter.css';

const TaskFilter = ({setFilter, filter}) => {
  return (
    <div className="task-filter">
      <button
        onClick={() => setFilter('all')}
        className={filter === 'all' ? 'bold' : ''}>
        Toutes
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={filter === 'completed' ? 'bold' : ''}>
        Terminées
      </button>
      <button
        onClick={() => setFilter('pending')}
        className={filter === 'pending' ? 'bold' : ''}>
        Non terminées
      </button>
    </div>
  );
};

export default TaskFilter;
