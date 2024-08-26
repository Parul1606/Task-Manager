import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronUpIcon, ChevronDownIcon, TrashIcon, PencilIcon, CheckIcon } from '@heroicons/react/solid';

function TaskAccordion({ task, index, onDelete, onEdit, onToggleComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(index, editedTask);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedTask(task);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <div className="mb-4">
      <button
        className={`w-full flex justify-between items-center p-4 border rounded-lg shadow-md transition-all duration-300 ${
          isOpen ? 'bg-blue-500 text-white' : 'bg-white text-black'
        }`}
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">{`Task ${index + 1}`}</h3>
        {isOpen ? (
          <ChevronUpIcon className="h-6 w-6 text-white" />
        ) : (
          <ChevronDownIcon className="h-6 w-6 text-black" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-green-100 border border-t-0 rounded-b-lg flex flex-col gap-4">
          {isEditing ? (
            <div>
              <input
                type="text"
                name="title"
                value={editedTask.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mb-2"
              />
              <textarea
                name="description"
                value={editedTask.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mb-2"
              />
              <input
                type="date"
                name="dueDate"
                value={editedTask.dueDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mb-2"
              />
              <select
                name="priority"
                value={editedTask.priority}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mb-2"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <div className="mt-4 flex gap-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  onClick={handleSaveClick}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="mb-2 text-gray-700">{`Title: ${task.title}`}</p>
              <p className="mb-2 text-gray-700">{`Description: ${task.description}`}</p>
              <p className="mb-2 text-gray-700">{`Due Date: ${task.dueDate}`}</p>
              <p className="mb-2 text-gray-700">{`Priority: ${task.priority}`}</p>
              <div className="flex gap-4">
                <button
                  className={`flex items-center px-4 py-2 rounded-lg transition duration-300 ${
                    task.completed ? 'bg-gray-500 text-white' : 'bg-green-500 text-white'
                  }`}
                  onClick={onToggleComplete}
                >
                  <CheckIcon className="h-5 w-5 mr-2" /> {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 flex items-center"
                  onClick={handleEditClick}
                >
                  <PencilIcon className="h-5 w-5 mr-2" /> Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 flex items-center"
                  onClick={onDelete}
                >
                  <TrashIcon className="h-5 w-5 mr-2" /> Delete
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

TaskAccordion.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};

export default TaskAccordion;
