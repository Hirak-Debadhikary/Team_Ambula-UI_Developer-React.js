// import React, { useState } from "react";

// // Define a new context for managing the todo list
// const TodoContext = React.createContext();

// function TodoList() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const handleInputChange = (e) => {
//     setNewTask(e.target.value);
//   };

//   const handleAddTask = () => {
//     if (newTask.trim() !== "") {
//       setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
//       setNewTask("");
//     }
//   };

//   const handleCompleteTask = (taskId) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const handleRemoveTask = (taskId) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   return (
//     <div className="border border-red-500 p-4">
//       <h2 className="text-xl font-bold mb-4">To-Do List</h2>
//       <input
//         type="text"
//         value={newTask}
//         onChange={handleInputChange}
//         placeholder="Add a new task"
//         className="border border-gray-300 rounded-md px-3 py-2 mb-2"
//       />
//       <button
//         onClick={handleAddTask}
//         className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//       >
//         Add Task
//       </button>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id} className="flex items-center mb-2">
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => handleCompleteTask(task.id)}
//               className="mr-2"
//             />
//             <span className={`text-lg ${task.completed ? "line-through" : ""}`}>
//               {task.text}
//             </span>
//             <button
//               onClick={() => handleRemoveTask(task.id)}
//               className="ml-auto bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
//             >
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         Total Tasks: {tasks.length} | Completed Tasks:{" "}
//         {tasks.filter((task) => task.completed).length}
//       </div>
//     </div>
//   );
// }

// export { TodoList, TodoContext };

// function TodoList() {
//   const [tasks, setTasks] = UseLocalStorageState("todos", []);
//   const [newTask, setNewTask] = useState("");

//   const handleInputChange = (e) => {
//     setNewTask(e.target.value);
//   };

//   const handleAddTask = () => {
//     if (newTask.trim() !== "") {
//       setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
//       setNewTask("");
//     }
//   };

//   const handleCompleteTask = (taskId) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const handleRemoveTask = (taskId) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   return (
//     <TodoContext.Provider
//       value={{ tasks, handleCompleteTask, handleRemoveTask }}
//     >
//       <div className="border border-red-500 p-4">
//         <h2 className="text-xl font-bold mb-4">To-Do List</h2>
//         <input
//           type="text"
//           value={newTask}
//           onChange={handleInputChange}
//           placeholder="Add a new task"
//           className="border border-gray-300 rounded-md px-3 py-2 mb-2"
//         />
//         <button
//           onClick={handleAddTask}
//           className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//         >
//           Add Task
//         </button>
//         <ul>
//           {tasks.map((task) => (
//             <li key={task.id} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 checked={task.completed}
//                 onChange={() => handleCompleteTask(task.id)}
//                 className="mr-2"
//               />
//               <span
//                 className={`text-lg ${task.completed ? "line-through" : ""}`}
//               >
//                 {task.text}
//               </span>
//               <button
//                 onClick={() => handleRemoveTask(task.id)}
//                 className="ml-auto bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//         <div>
//           Total Tasks: {tasks.length} | Completed Tasks:{" "}
//           {tasks.filter((task) => task.completed).length}
//         </div>
//       </div>
//     </TodoContext.Provider>
//   );
// }
// export { TodoList, TodoContext };

import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
// import { TodoContext } from "./TodoContext";

function TodoList() {
  const {
    tasks,
    newTask,
    handleInputChange,
    handleAddTask,
    handleCompleteTask,
    handleRemoveTask,
  } = useContext(TodoContext);

  return (
    <div className="border border-red-500 p-4">
      <h2 className="text-xl font-bold mb-4">To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Add a new task"
        className="border border-gray-300 rounded-md px-3 py-2 mb-2"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Add Task
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCompleteTask(task.id)}
              className="mr-2"
            />
            <span className={`text-lg ${task.completed ? "line-through" : ""}`}>
              {task.text}
            </span>
            <button
              onClick={() => handleRemoveTask(task.id)}
              className="ml-auto bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        Total Tasks: {tasks.length} | Completed Tasks:{" "}
        {tasks.filter((task) => task.completed).length}
      </div>
    </div>
  );
}

export default TodoList;
