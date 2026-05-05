import React, { useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([
    { id: 1, name: "260126-text-to-image-compare" },
    { id: 2, name: "260126-text-to-image-h2h" },
    { id: 3, name: "250929-Omni-Elo" },
    { id: 4, name: "250909-text-to-video-h2h" },
    { id: 5, name: "260317-Omni-t2v" }

  ]);

  const [newProject, setNewProject] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // ➕ Add Project
  const addProject = () => {
    if (!newProject.trim()) return;

    const newItem = {
      id: Date.now(),
      name: newProject
    };

    setProjects([...projects, newItem]);
    setNewProject("");
  };

  // ❌ Delete Project
  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  // ✏️ Start Edit
  const startEdit = (project) => {
    setEditId(project.id);
    setEditText(project.name);
  };

  // ✅ Save Edit
  const saveEdit = () => {
    setProjects(
      projects.map((p) =>
        p.id === editId ? { ...p, name: editText } : p
      )
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Projects
      </h1>

      {/* Add Project */}
      <div className="flex gap-3 mb-6">
        <input
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
          placeholder="Enter project name"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addProject}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Project List */}
      <div className="space-y-4">

        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >

            {/* Name / Edit Mode */}
            {editId === project.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="border p-2 rounded w-full mr-3"
              />
            ) : (
              <span>{project.name}</span>
            )}

            {/* Actions */}
            <div className="flex gap-2">

              {editId === project.id ? (
                <button
                  onClick={saveEdit}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => startEdit(project)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => deleteProject(project.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}