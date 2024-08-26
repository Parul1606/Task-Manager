import ErrorBoundary from './components/ErrorBoundary'; // Adjust the path if necessary
import TaskForm from './components/TaskForm';
import TaskAccordion from './components/TaskAccordian';
import { useTasks } from './components/taskContext';
import './App.css';

function App() {
  const { state, dispatch } = useTasks();

  const addTask = (task) => {
    dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), ...task, completed: false } });
  };

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const editTask = (index, updatedTask) => {
    dispatch({ type: 'EDIT_TASK', payload: { index, updatedTask } });
  };

  const toggleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
  };

  const filteredTasks = state.tasks.filter(task =>
    task.title.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  return (
    <ErrorBoundary>
      <div className="app">
        <h1 className="app-title">Task Manager</h1>
        <TaskForm onAddTask={addTask} />
        <div className="search-container px-4 py-4">
          <input
            type="text"
            className="search-input"
            placeholder="Search tasks..."
            value={state.searchTerm}
            onChange={(e) => dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value })}
          />
        </div>
        <ul className="task-list">
          {filteredTasks.map((task, index) => (
            <li key={task.id} className={`task-item ${task.completed ? 'completed-task' : ''}`}>
              <TaskAccordion
                task={task}
                index={index}
                onDelete={() => deleteTask(task.id)}
                onEdit={editTask}
                onToggleComplete={() => toggleComplete(task.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </ErrorBoundary>
  );
}

export default App;
