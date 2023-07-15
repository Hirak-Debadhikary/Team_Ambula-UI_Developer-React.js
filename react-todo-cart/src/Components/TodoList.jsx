import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoList() {
  // Accessing TodoContext and its state variables and functions
  const {
    tasks,
    newTask,
    handleInputChange,
    handleAddTask,
    handleCompleteTask,
    handleRemoveTask,
  } = useContext(TodoContext);

  return (
    <div className="flex justify-center items-center mt-12">
      <div className="border  p-4 bg-white rounded-md">
        <h2 className="text-xl font-bold mb-4 text-center">To-Do List</h2>
        {/* Add Task Section */}
        <div className="border  flex justify-center items-center gap-4 p-4">
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Add a new task"
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>

        {/* Task List */}
        <div className="p-4 w-90 border">
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li key={task.id} className="flex items-center">
                {/* Checkbox for Task Completion */}
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCompleteTask(task.id)}
                  className="mr-2"
                />
                {/* Task Text */}
                <div
                  className={`text-lg flex-1 mr-2 ${
                    task.completed ? "line-through" : ""
                  }`}
                >
                  {task.text}
                </div>
                {/* Remove Task Button */}
                <button
                  onClick={() => handleRemoveTask(task.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded-md"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Task Summary */}
        <div className="flex justify-between mt-4">
          {/* Total Tasks Count */}
          <div className="text-md uppercase font-medium max-w-[240px] text-primary hover:underline">
            Total Tasks: <span className="font-bold">{tasks.length}</span>
          </div>
          {/* Completed Tasks Count */}
          <div className="text-md uppercase font-medium max-w-[240px] text-primary hover:underline">
            Completed Tasks:{" "}
            <span className="font-bold text-green-500 text-md">
              {tasks.filter((task) => task.completed).length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
