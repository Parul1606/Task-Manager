# Task Manager Application

Welcome to the Task Manager Application! This modern web app is designed to help you efficiently manage your tasks with an intuitive and user-friendly interface. Built with cutting-edge technologies, it offers a range of features for task creation, management, and tracking.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Design Decisions](#design-decisions)
- [Usage](#usage)
- [Contributing](#contributing)
- [Introduction Video](#introduction-video)
- [Screenshots](#screenshots)

## Project Overview

The Task Manager Application allows you to:

- **Create Tasks**: Easily add tasks with a title, description, priority, and due date.
- **Manage Tasks**: Edit, delete, and toggle the completion status of tasks.
- **Accordion View**: View detailed information about each task in a collapsible accordion format.
- **Global State Management**: Utilize React Context API for centralized state management.
- **Error Handling**: Custom Error Boundary component ensures a smooth user experience by handling unexpected issues.

## Technologies Used

Here’s a breakdown of the technologies used in this project:

- **React**: Used for building interactive UIs with reusable components and efficient state handling.
- **Tailwind CSS**: A utility-first CSS framework for building custom and responsive designs quickly.
- **Bootstrap**: Provides additional pre-designed components and styles for a polished look.
- **React Context API**: Manages global state across the application in a simple and efficient manner.
- **Vite**: Chosen for its fast development server and efficient build process, enhancing productivity.
- **Heroicons**: Utilized for clean and scalable icons throughout the app.

## Setup and Installation

To get the Task Manager Application running on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/task-manager.git
   ```
2. **Navigate into the project directory**:
   ```bash
   cd task-manager
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server with Vite**:
   ```bash
   npm run dev
   ```
   Your application will be available at [http://localhost:5173](http://localhost:5173).

## Project Structure

Here’s a brief overview of how the project is organized:

- **/src**: Contains all the source files for the application.
  - **/components**: Includes React components like `TaskAccordion`, `TaskForm`, and more.
  - **App.jsx**: Main component that integrates and renders the task list with routing.
  - **index.js**: Entry point that renders the app.

## Design Decisions

Key design choices made during the development:

- **State Management**: React Context API was selected for its simplicity and efficiency in managing global state.
- **Styling**: Tailwind CSS was used for its flexibility and responsiveness, complemented by Bootstrap for additional styling options.
- **Routing**: Vite was chosen for its fast build times and development server, enhancing the overall development experience.

## Usage

To use the Task Manager Application:

- **Create Tasks**: Use the form at the top of the page to add new tasks with a title, description, priority, and due date.
- **Manage Tasks**: Click on a task to view details in the accordion. Use the provided options to edit, delete, or mark the task as complete.
- **Accordion View**: Expand or collapse task details to see more information.
