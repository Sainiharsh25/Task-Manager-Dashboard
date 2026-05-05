import React from "react";

export default function Team() {
  const members = [
    { id: "EMP001", name: "Rahul Sharma", role: "Frontend Developer" },
    { id: "EMP002", name: "Priya Singh", role: "Backend Developer" },
    { id: "EMP003", name: "Aman Verma", role: "UI/UX Designer" },
    { id: "EMP004", name: "Neha Gupta", role: "QA Engineer" },
    { id: "EMP005", name: "Manoj Kumar", role: "QA Engineer" },
    { id: "EMP006", name: "Sneha Mishra", role: "Team Lead" },
    { id: "EMP007", name: "Rajesh Kumar", role: "Manager" },
    { id: "EMP008", name: "Priya Sharma", role: "QA Engineer" },
    { id: "EMP009", name: "Neha Patel", role: "QR Specialist" },
    { id: "EMP0010", name: "Vikram Singh", role: "DevOps Engineer" }
  ];

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Team Members
      </h1>

      {/* Table Header */}
      <div className="bg-black text-white grid grid-cols-3 p-4 rounded-xl font-semibold">
        <span>Employee ID</span>
        <span>Name</span>
        <span>Role</span>
      </div>

      {/* List */}
      <div className="space-y-2 mt-2">

        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white grid grid-cols-3 p-4 rounded-xl shadow"
          >
            <span className="font-medium">
              {member.id}
            </span>

            <span>
              {member.name}
            </span>

            <span className="text-gray-600">
              {member.role}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}