import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
    status: "Pending"
  });

  const fetchTasks = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/tasks"
      );
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleCreateTask = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/tasks",
        form
      );

      alert("Task created successfully");

      setForm({
        title: "",
        description: "",
        assignedTo: "",
        dueDate: "",
        status: "Pending"
      });

      fetchTasks();

    } catch (error) {
      alert("Task creation failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Task Management
      </h1>

      {/* Create Task Form */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-5">
          Create New Task
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            name="title"
            placeholder="Task Title"
            className="border p-3 rounded-lg"
            value={form.title}
            onChange={handleChange}
          />

          <input
            name="assignedTo"
            placeholder="Assign To"
            className="border p-3 rounded-lg"
            value={form.assignedTo}
            onChange={handleChange}
          />

          <input
            name="description"
            placeholder="Description"
            className="border p-3 rounded-lg"
            value={form.description}
            onChange={handleChange}
          />

          <input
            type="date"
            name="dueDate"
            className="border p-3 rounded-lg"
            value={form.dueDate}
            onChange={handleChange}
          />

          <select
            name="status"
            className="border p-3 rounded-lg"
            value={form.status}
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

        </div>

        <button
          onClick={handleCreateTask}
          className="mt-6 bg-black text-white px-6 py-3 rounded-xl"
        >
          Create Task
        </button>
      </div>

      {/* Task List */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-5">
          All Tasks
        </h2>

        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="border rounded-xl p-5"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">
                    {task.title}
                  </h3>

                  <p className="text-gray-600 mt-1">
                    {task.description}
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    Assigned to: {task.assignedTo}
                  </p>

                  <p className="text-sm text-gray-500">
                    Due: {task.dueDate}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    {task.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}