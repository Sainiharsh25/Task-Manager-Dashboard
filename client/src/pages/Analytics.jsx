import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";

export default function Analytics() {
  // 📊 Weekly Tasks
  const taskData = [
    { name: "Mon", tasks: 12 },
    { name: "Tue", tasks: 18 },
    { name: "Wed", tasks: 10 },
    { name: "Thu", tasks: 22 },
    { name: "Fri", tasks: 16 },
    { name: "Sat", tasks: 8 },
    { name: "Sun", tasks: 14 }
  ];

  // 📈 Productivity
  const productivityData = [
    { name: "Rahul", value: 92 },
    { name: "Priya", value: 88 },
    { name: "Aman", value: 81 },
    { name: "Neha", value: 75 }
  ];

  // 🥧 Task Status
  const statusData = [
    { name: "Completed", value: 60 },
    { name: "In Progress", value: 25 },
    { name: "Pending", value: 15 }
  ];

  // 🎨 CLEAN MODERN COLORS (NO BLACK)
  const COLORS = ["#22C55E", "#FACC15", "#EF4444"];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      <h1 className="text-3xl font-bold mb-6">
        Analytics Dashboard
      </h1>

      {/* ================= TOP ROW ================= */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* 📊 BAR CHART */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Weekly Tasks
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={taskData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tasks" fill="#6366F1" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 📈 LINE CHART */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Team Productivity
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={productivityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#22C55E"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* ================= PIE CHART ================= */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-semibold mb-4">
          Task Status Distribution
        </h2>

        <div className="flex justify-center">

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {statusData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

        </div>
      </div>
    </div>
  );
}