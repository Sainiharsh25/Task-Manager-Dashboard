import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "member"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        "${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/auth/signup",
        form
      );

      alert(res.data.message);

      // redirect to login page after successful signup
      navigate("/");

    } catch (error) {
      alert(
        error.response?.data?.message || "Signup failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-2xl w-[420px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Account
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border p-3 w-full mb-4 rounded-lg"
          onChange={handleChange}
        />

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
          className="border p-3 w-full mb-4 rounded-lg"
          onChange={handleChange}
        />

        <select
          name="role"
          className="border p-3 w-full mb-5 rounded-lg"
          onChange={handleChange}
        >
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>

        <button
          onClick={handleSignup}
          className="bg-black text-white w-full p-3 rounded-xl"
        >
          Signup
        </button>

        <p className="text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/"
            className="font-semibold text-black"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}