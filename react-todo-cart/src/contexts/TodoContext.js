import React, { createContext, useState, useEffect } from "react";

// Create Context
const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  // State for tasks
  const [tasks, setTasks] = useState(() => {
    // Retrieve tasks from local storage or initialize as empty array
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // State for new task input
  const [newTask, setNewTask] = useState("");

  // Save tasks to local storage when tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Handler for new task input change
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Handler for adding a new task
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  // Handler for completing a task
  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handler for removing a task
  const handleRemoveTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Context value
  const todoContextValue = {
    tasks,
    newTask,
    handleInputChange,
    handleAddTask,
    handleCompleteTask,
    handleRemoveTask,
  };

  return (
    <TodoContext.Provider value={todoContextValue}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
