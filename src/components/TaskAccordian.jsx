import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronUpIcon, ChevronDownIcon, TrashIcon, PencilIcon } from '@heroicons/react/solid';

function TaskAccordion({ task, index, onDelete, onEdit, onToggleComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(index, editedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTask(task);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="mr-4"
          />
          <h3 className={`text-lg font-semibold ${task.completed ? 'line-through' : ''}`}>
            {isEditing ? (
              <input
                type="text"
                name="title"
                value={editedTask.title}
                onChange={handleChange}
                className="border rounded px-2 py-1"
              />
            ) : (
              task.title
            )}
          </h3>
        </div>
        <div>
          {isOpen ? (
            <ChevronUpIcon className="h-6 w-6 cursor-pointer" onClick={toggleAccordion} />
          ) : (
            <ChevronDownIcon className="h-6 w-6 cursor-pointer" onClick={toggleAccordion} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p>
            {isEditing ? (
              <textarea
                name="description"
                value={editedTask.description}
                onChange={handleChange}
                className="border rounded px-2 py-1 w-full"
              />
            ) : (
              task.description
            )}
          </p>
          <div className="flex justify-between items-center mt-2">
            <span>
              Due Date: {isEditing ? (
                <input
                  type="date"
                  name="dueDate"
                  value={editedTask.dueDate}
                  onChange={handleChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                task.dueDate
              )}
            </span>
            <span>
              Priority: {isEditing ? (
                <select
                  name="priority"
                  value={editedTask.priority}
                  onChange={handleChange}
                  className="border rounded px-2 py-1"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              ) : (
                task.priority
              )}
            </span>
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            {isEditing ? (
              <>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <PencilIcon className="h-6 w-6 text-yellow-500 cursor-pointer" onClick={handleEdit} />
                <TrashIcon className="h-6 w-6 text-red-500 cursor-pointer" onClick={onDelete} />
              </>
            )}
          </div>
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
  onToggleComplete: PropTypes.func.isRequired, // Added this line
};

export default TaskAccordion;
