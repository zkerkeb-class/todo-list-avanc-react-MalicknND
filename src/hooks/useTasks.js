import {useState, useCallback, useEffect} from 'react';

const useTasks = () => {
  // Chargement des tâches à partir du local storage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Ajout d'une nouvelle tâche
  const addTask = useCallback(text => {
    setTasks(prevTasks => [
      ...prevTasks,
      {id: Date.now(), text, completed: false},
    ]);
  }, []);

  // Suppression d'une tâche
  const deleteTask = useCallback(id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, []);

  // Marquer une tâche comme terminée/non terminée
  const toggleTask = useCallback(id => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    );
  }, []);

  // Sauvegarde des tâches dans le local storage à chaque changement de la liste de tâches
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return {tasks, addTask, deleteTask, toggleTask};
};

export default useTasks;
