import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronUpIcon, ChevronDownIcon, TrashIcon, PencilIcon, CheckIcon } from '@heroicons/react/solid';

function TaskAccordion({ task, index, onDelete, onEdit, onToggleComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleToggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleSaveEdit = () => {
    onEdit(index, editedTask);
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">
          {task.title}
        </h3>
        <div className="flex items-center">
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-lg mr-2"
            onClick={handleToggleAccordion}
          >
            {isOpen ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
          </button>
          <button
            className="bg-green-500 text-white px-2 py-1 rounded-lg mr-2"
            onClick={onToggleComplete}
          >
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button
            className="bg-yellow-500 text-white px-2 py-1 rounded-lg mr-2"
            onClick={() => setIsEditing(!isEditing)}
          >
            <PencilIcon className="h-5 w-5" />
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-lg"
            onClick={onDelete}
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4">
          {isEditing ? (
            <div>
              <input
                type="text"
                value={editedTask.title}
                onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <textarea
                value={editedTask.description}
                onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              ></textarea>
              <button
                onClick={handleSaveEdit}
                className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2"
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <p className="text-gray-600">{task.description}</p>
              <p className="text-gray-600 mt-2">Due Date: {task.dueDate}</p>
              <p className="text-gray-600">Priority: {task.priority}</p>
            </>
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
