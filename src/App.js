import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h1>Ma Liste de Tâches</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
