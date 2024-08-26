import { useState } from 'react';
import PropTypes from 'prop-types';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Title is required!');
      return;
    }
    if (!description.trim()) {
      setError('Description is required!');
      return;
    }
    if (!dueDate) {
      setError('Due Date is required!');
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    if (dueDate < today) {
      setError('Due date cannot be in the past!');
      return;
    }

    onAddTask({ title, description, dueDate, priority });

    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Low');
    setError('');
  };

  return (
    <div className="bg-white p-12 rounded-lg shadow-xl max-w-xl mx-auto">
      <h3 className="text-3xl text-black font-semibold mb-4">Add New Task</h3>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="block text-gray-700 font-medium mb-2">Due Date</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priority" className="block text-gray-700 font-medium mb-2">Priority</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition duration-300 ease-in-out"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default TaskForm;
