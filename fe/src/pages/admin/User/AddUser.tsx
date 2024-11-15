import React, { useState } from "react";
import { createUser } from "./API";

const AddUserForm = ({ onUserAdded }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    avatar: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUser(user);
      onUserAdded();
      setUser({ name: "", email: "", password: "", role: "user", avatar: "" });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 border rounded-lg bg-white shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Thêm người dùng mới</h2>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Tên</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Mật khẩu</label>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Role */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Vai trò</label>
        <select
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

     

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
       Thêm 
      </button>
    </form>
  );
};

export default AddUserForm;
