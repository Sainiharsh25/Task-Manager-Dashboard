import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  CheckCircle,
  Clock,
  AlertTriangle,
  Users,
  BarChart3,
  Bell,
  LogOut
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // logout popup state
  const [showLogout, setShowLogout] = useState(false);

  const stats = [
    {
      title: "Total Projects",
      value: "12",
      icon: <FolderKanban size={28} />
    },
    {
      title: "Completed Tasks",
      value: "128",
      icon: <CheckCircle size={28} />
    },
    {
      title: "Pending Tasks",
      value: "34",
      icon: <Clock size={28} />
    },
    {
      title: "Overdue",
      value: "8",
      icon: <AlertTriangle size={28} />
    }
  ];

  const handleLogout = () => {
    setShowLogout(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-[260px] bg-black text-white p-6">
        <h1 className="text-2xl font-bold mb-10">
          Task Manager
        </h1>

        <div className="space-y-6">

          <div
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-3 cursor-pointer hover:text-gray-300"
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </div>

          {/* ✅ FIXED: Projects */}
          <div
            onClick={() => navigate("/projects")}
            className="flex items-center gap-3 cursor-pointer hover:text-gray-300"
          >
            <FolderKanban size={20} />
            <span>Projects</span>
          </div>

          <div
            onClick={() => navigate("/tasks")}
            className="flex items-center gap-3 cursor-pointer hover:text-gray-300"
          >
            <CheckCircle size={20} />
            <span>Tasks</span>
          </div>

          {/* ✅ FIXED: Team Members */}
          <div
            onClick={() => navigate("/team")}
            className="flex items-center gap-3 cursor-pointer hover:text-gray-300"
          >
            <Users size={20} />
            <span>Team Members</span>
          </div>

          {/* ✅ FIXED: Analytics */}
          <div
            onClick={() => navigate("/analytics")}
            className="flex items-center gap-3 cursor-pointer hover:text-gray-300"
          >
            <BarChart3 size={20} />
            <span>Analytics</span>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mt-20 flex items-center gap-3 bg-white text-black px-4 py-3 rounded-xl w-full hover:bg-gray-200 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1">

        {/* Top Navbar */}
        <div className="bg-white shadow-sm px-8 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">
              Team Task Manager
            </h1>
            <p className="text-gray-500 text-sm">
              Admin Dashboard
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Bell className="cursor-pointer" />

            <div className="text-right">
              <p className="font-semibold">
                {user?.name || "User"}
              </p>
              <p className="text-sm text-gray-500">
                {user?.role || "Member"}
              </p>
            </div>

            <button
              onClick={() => navigate("/tasks")}
              className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition"
            >
              + Create Task
            </button>
          </div>
        </div>

        <div className="p-8">

          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold">
              Welcome Back 👋
            </h2>
            <p className="text-gray-600 mt-2">
              Track projects, tasks, and employee productivity
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-sm">
                      {item.title}
                    </p>
                    <h2 className="text-3xl font-bold mt-2">
                      {item.value}
                    </h2>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-xl">
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">

            {/* Recent Tasks */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-5">
                Recent Tasks
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between border-b pb-3">
                  <span>Design Login Page</span>
                  <span className="font-medium text-green-600">
                    Completed
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span>Backend API Integration</span>
                  <span className="font-medium text-yellow-600">
                    In Progress
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span>Deploy Backend</span>
                  <span className="font-medium text-red-500">
                    Pending
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>MongoDB Connection</span>
                  <span className="font-medium text-green-600">
                    Completed
                  </span>
                </div>
              </div>
            </div>

            {/* Team Performance */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-5">
                Team Performance
              </h2>

              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <span>Rahul Sharma</span>
                  <span className="font-bold">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full w-[92%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span>Priya Singh</span>
                  <span className="font-bold">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full w-[88%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span>Aman Verma</span>
                  <span className="font-bold">81%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full w-[81%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4">
              <Users size={40} />
              <div>
                <h2 className="text-xl font-bold">
                  Team Members
                </h2>
                <p className="text-gray-500">
                  24 active employees
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4">
              <BarChart3 size={40} />
              <div>
                <h2 className="text-xl font-bold">
                  Productivity Analytics
                </h2>
                <p className="text-gray-500">
                  Live team performance insights
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Logout Popup */}
      {showLogout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[300px] text-center">

            <h2 className="text-xl font-semibold mb-4">
              Are you sure?
            </h2>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLogout(false)}
                className="w-full py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  window.location.href = "/";
                }}
                className="w-full py-2 bg-red-500 text-white rounded-lg"
              >
                Logout
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}