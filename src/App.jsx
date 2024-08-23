import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTask = () => {
    if (title && description) {
      const newTask = {
        id: Date.now(),
        title,
        description
      };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1 className='text-black font-bold'>Task List</h1>

      <div className="task-form">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item text-black">
            <div>
              <h3 className='font-bold'>Title: {task.title}</h3>
              <p className='font-bold'>Description: {task.description}</p>
            </div>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
