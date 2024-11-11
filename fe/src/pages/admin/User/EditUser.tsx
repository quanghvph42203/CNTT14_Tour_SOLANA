import React, { useState } from "react";
import { updateUser } from "./API";

const EditUserForm = ({ user, onUserUpdated }) => {
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateUser(user._id, updatedUser);
      onUserUpdated();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Chỉnh sửa người dùng</h2>

      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Tên
        </label>
        <input
          type="text"
          id="name"
          value={updatedUser.name}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, name: e.target.value })
          }
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={updatedUser.email}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, email: e.target.value })
          }
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="role" className="text-sm font-medium text-gray-700">
          Vai trò
        </label>
        <select
          id="role"
          value={updatedUser.role}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, role: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded-md mt-4 hover:bg-yellow-600 transition duration-200"
      >
        Cập nhật
      </button>
    </form>
  );
};

export default EditUserForm;
