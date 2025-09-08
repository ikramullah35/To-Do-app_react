import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // ✅ Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // ✅ Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("tasks"); // avoid saving empty array forever
    }
  }, [tasks]);

  const handleChange = (e) => setTask(e.target.value);

  const handleDelete = (indexToDelete) => {
    const newTasks = tasks.filter((_, i) => i !== indexToDelete);
    setTasks(newTasks);
  };

  const handleEdit = (index) => {
    setTask(tasks[index]); // put task in input
    setEditIndex(index); // track index
  };

  const handleClick = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      // Edit mode
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Add mode
      setTasks([...tasks, task]);
    }

    setTask(""); // clear input
  };

  return (
    <>
      <div className="container to-do bg-gray-200 w-[300px] border border-gray-300 my-3 rounded-2xl mx-auto">
        <h1 className="text-center font-semibold text-4xl mt-6">TO DO</h1>

        <div className="flex items-center gap-2 mt-3 m-1">
          <input
            value={task}
            onChange={handleChange}
            type="text"
            className="w-[260px] px-3 py-2 rounded-2xl border border-gray-300 bg-white/70 backdrop-blur-sm 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       placeholder-gray-400 shadow-md transition-all duration-300"
            placeholder="Enter your task"
          />
          <button
            onClick={handleClick}
            className="text-blue-500 text-3xl hover:scale-110 transition"
          >
            <IoIosAddCircleOutline />
          </button>
        </div>

        <ul className="mt-4 space-y-2">
          {tasks.map((item, index) => (
            <li
              key={index}
              className="px-5 mx-auto flex w-[290px] py-2 bg-white rounded-xl shadow-md border border-gray-200 hover:bg-blue-50 transition"
            >
              <span className="flex-1">{item}</span>

              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 text-2xl hover:text-red-700 transition"
              >
                <FaTrash />
              </button>
              <button
                onClick={() => handleEdit(index)}
                className="text-green-500 mx-1 hover:text-green-700 text-2xl transition"
              >
                <FaEdit />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
