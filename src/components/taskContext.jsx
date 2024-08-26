import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types'

// Define the initial state and reducer
const initialState = {
  tasks: [],
  searchTerm: ''
};

const TaskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload.index ? { ...task, ...action.payload.updatedTask } : task
        )
      };
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        )
      };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);

//define prop-types for taskContext component
TaskProvider.propTypes = {
  children: PropTypes.node.isRequired
};