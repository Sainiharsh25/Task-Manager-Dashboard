import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login successful");

      window.location.href = "/dashboard";

    } catch (error) {
      alert(
        error.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* Left Side */}
      <div className="w-1/2 bg-black text-white flex flex-col justify-center px-16">
        <h1 className="text-5xl font-bold mb-6">
          Team Task Manager
        </h1>

        <p className="text-lg text-gray-300 leading-8">
          Manage projects, tasks, employees,
          and team productivity with a modern
          professional dashboard built for real teams.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-2xl p-10 w-[420px]">

          <h2 className="text-3xl font-bold mb-2">
            Welcome Back 👋
          </h2>

          <p className="text-gray-500 mb-8">
            Please login to continue
          </p>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="border p-3 w-full mb-4 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-3 w-full mb-5 rounded-lg"
            onChange={handleChange}
          />

          <button
            onClick={handleLogin}
            className="bg-black text-white w-full p-3 rounded-xl hover:scale-105 transition"
          >
            Login
          </button>

          <p className="text-center mt-6 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-black"
            >
              Signup
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}