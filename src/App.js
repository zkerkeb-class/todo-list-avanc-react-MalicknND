import React, {useEffect, useState} from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Récupérer les tâches sauvegardées dans le localStorage au chargement de la page
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks); // Récupère les tâches sauvegardées
    }
  }, []);

  // Sauvegarder les tâches dans le localStorage à chaque modification
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks)); // Sauvegarde dans le localStorage
    }
  }, [tasks]);

  // Ajouter une tâche
  const addTask = task => {
    if (task.trim()) {
      const newTask = {text: task, completed: false};
      setTasks(prevTasks => [...prevTasks, newTask]); // Met à jour l'état des tâches
    }
  };

  // Supprimer une tâche
  const removeTask = index => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); // Met à jour l'état des tâches
  };

  // Changer l'état de la tâche (terminée ou non)
  const toggleTaskCompletion = index => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? {...task, completed: !task.completed} : task,
    );
    setTasks(updatedTasks); // Met à jour l'état des tâches
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        removeTask={removeTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
}

export default App;
