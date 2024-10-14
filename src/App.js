import React, {useState, useMemo} from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import useTasks from './hooks/useTasks';

const App = () => {
  // Utilisation du custom hook useTasks pour gérer l'état des tâches
  const {tasks, addTask, deleteTask, toggleTask} = useTasks();
  const [filter, setFilter] = useState('all'); // Gestion du filtre (toutes, terminées, non terminées)

  // Filtrage des tâches à l'aide de useMemo pour améliorer les performances
  const filteredTasks = useMemo(() => {
    if (filter === 'completed') {
      return tasks.filter(task => task.completed); // Tâches terminées
    }
    if (filter === 'pending') {
      return tasks.filter(task => !task.completed); // Tâches non terminées
    }
    return tasks; // Toutes les tâches
  }, [tasks, filter]);

  return (
    <div>
      <h1>Ma Liste de Tâches</h1>
      <TodoForm addTask={addTask} /> {/* Formulaire pour ajouter une tâche */}
      <TaskFilter filter={filter} setFilter={setFilter} />{' '}
      {/* Boutons de filtrage */}
      <TodoList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />{' '}
      {/* Liste des tâches */}
    </div>
  );
};

export default App;
